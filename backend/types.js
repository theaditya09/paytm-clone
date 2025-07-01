const zod = require('zod')

const signUpBody = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

const signInBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})

module.exports = {
    signUpBody,
    signInBody
}