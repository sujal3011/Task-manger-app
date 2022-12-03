//creating user schema and model

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    provider: {
        type: String,
        default: "native",
    },
    providerId: {
        type: String,
        default: null
    },
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});
const User=mongoose.model('user', UserSchema)
// User.createIndexes()
module.exports = User