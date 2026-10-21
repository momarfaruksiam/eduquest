const userModel = require('../models/user.model')

const findUser = require('express').Router()


findUser.post('/', async (req, res) => {
    const { fullName, email, username } = req.body

    if (!fullName || !email || !username)
        return res.status(404).json({
            success: false,
            message: 'Please fill the required fileds!'
        })


    try {
        const userByEmail = email && await userModel.findOne({ email })
        const userByUsername = username && await userModel.findOne({ username })

        if (userByEmail && userByEmail.isOtpVerified && userByUsername && userByUsername.isOtpVerified)
            return res.status(200).json({
                success: true,
                message: 'User found!',
                data: { userByEmail, userByUsername }
            })

        if (userByEmail && userByEmail.isOtpVerified)
            return res.status(201).json({
                success: true,
                message: 'User found!',
                data: userByEmail
            })


        if (userByUsername && userByUsername.isOtpVerified)
            return res.status(202).json({
                success: true,
                message: 'User found!',
                data: userByUsername
            })


        return res.status(400).json({
            success: false,
            message: 'User not found!'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: error
        })
    }
})


module.exports = findUser