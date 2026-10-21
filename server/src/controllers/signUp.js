const userModel = require('../models/user.model')

const signUp = require('express').Router()


signUp.post('/', async (req, res) => {
    const { fullName, email, username, password, confirmPassword } = req.body


    try {
        const userByEmail = await userModel.findOne({ email })

        if (userByEmail && userByEmail.isOtpVerified)
            return res.status(409).json({
                success: false,
                message: 'Same email user is already registered!'
            })

        if (userByEmail && !userByEmail.isOtpVerified)
            await userByEmail.deleteOne()

        const userByUsername = await userModel.findOne({ username })

        if (userByUsername && userByUsername.isOtpVerified)
            return res.status(409).json({
                success: false,
                message: 'same username user is already registered!'
            })

        if (userByUsername && !userByUsername.isOtpVerified)
            await userByUsername.deleteOne()


        const newUser = await userModel.create(req.body)

        return res.status(200).json({
            success: true,
            message: 'User added succesfully!'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: error
        })
    }
})


module.exports = signUp