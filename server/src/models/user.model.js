const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    otp: {
        type: String,
        select: false
    },
    codeExpiresAt: {
        type: Date,
        select: false
    },
    isOtpVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel