const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.JWT_SECRET

function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1]

    try{
        const {userId} = jwt.verify(token, secret)
        req.userId = userId
        next();
    }
    catch(err){
        return res.status(403).json({
            msg : "Invalid auth token"
        })
    }
}

module.exports = {
    authMiddleware
}