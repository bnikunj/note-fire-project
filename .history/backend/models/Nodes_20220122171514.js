const mongoose = require('mongoose');

const UserSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    emdescription:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    },
})

module.exports = mongoose.model('user',UserSchema); 