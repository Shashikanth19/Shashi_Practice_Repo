const mongoose = require('mongoose')

// const ObjectId = mongoose.Schema.Type.ObjectId

const userSchema = new mongoose.Schema({
    user: {type:String,ref: 'User',required: true},
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema, 'users')