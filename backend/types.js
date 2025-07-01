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

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

module.exports = {
    signUpBody,
    signInBody,
    updateBody
}