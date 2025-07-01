const {Router} = require('express')
const router = Router()
const {signUpBody, signInBody, updateBody} = require('../types')
const {Users, Accounts} = require('../database/index')
const jwt = require('jsonwebtoken')
const {authMiddleware} = require('../middlewares/middleware')
require('dotenv').config();
const secret = process.env.JWT_SECRET

router.post('/signup', async (req, res) => {
    const {success} = signUpBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg : "Invalid inputs. Please try again."
        })
    }

    const existingUser = await Users.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg : "User already exists / username taken"
        })
    }

    const user = await Users.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    })
    const userId = user._id;

    await Accounts.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, secret);



    res.status(200).json({
        msg : "User created succesfully",
        token : token
    })

})

router.post('/signin', async (req, res) => {

    const {success} = signInBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg : "Incorrect inputs"
        })
    }
    
    const userExists = await Users.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(userExists){
        const userId = userExists._id
        const token = jwt.sign({
            userId
        }, secret)
        res.status(200).json({
            token : token
        })
    }
    else{
        res.status(411).json({
            msg : "Invalid Credentials."
        })
    }
})


router.put('/update', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

	await Users.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";
    const users = await Users.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.status(200).json({
        users : users.map(u => {
                    return {
                        username : u.username,
                        firstName : u.firstName,
                        lastName : u.lastName,
                        _id: u._id
                    }
                })
    })
})

module.exports = router