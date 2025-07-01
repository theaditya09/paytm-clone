const mongoose = require('mongoose')
const {Router} = require('express')
const router = Router()
const {authMiddleware} = require('../middlewares/middleware')
const { Accounts } = require('../database')

router.get('/balance', authMiddleware, async (req, res) => {
    const account = await Accounts.findOne({
        userId : req.userId
    })
    res.status(200).json({
        balance : account.balance
    })
})

// bad solution - doesnt use transactions
router.post('/transfer', authMiddleware, async (req, res) => {
    const {to, amount} = req.body

    if (amount <= 0) {
        return res.status(400).json({ msg: "Amount must be greater than zero" });
    }

    const currAccount = await Accounts.findOne({
        userId : req.userId
    }) 

    if(amount > currAccount.balance){
        return res.status(400).json({
            msg : "Insufficient balance"
        })
    }

    const toAccount = await Accounts.findOne({
        userId : to
    })

    if(!toAccount){
        return res.status(400).json({
            msg : "Inccorect account details"
        })
    }

    await Accounts.updateOne(
        {userId : req.userId},
        {
            $inc : {
                balance : -amount
            }
        }
    )

    await Accounts.updateOne(
        {userId : to},
        {
            $inc : {
                balance : amount
            }
        }
    )

    res.status(200).json({
        msg : "Transfer successfull"
    })
})

//good solution - uses transactions in db
// router.post('/transfer', async (req, res) => {
//     const session = mongoose.startSession();
//     session.startTransaction();

//     // const {to, amount} = req.body
//     // const currAccount = await Accounts.findOne({
//     //     userId : req.userId
//     // }).session(session);
// })

module.exports = router