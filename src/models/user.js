const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: [true, "Please enter your first name!"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "Please enter your last name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: Number,
        default: 1 // 0-user, 1-admin
    },
    avatar: {
        type: String,
        default: ''
    },
    provider: {
        type: String,
        default: 'local',
        required: true
    }

}, {
    timestamps: true
})


const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;