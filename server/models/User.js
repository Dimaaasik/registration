const {Schema, model} = require('mongoose')

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    department: {type: String, required: true},
    departmentCode: {type: String, required: true},
    avatar: {type: String}
})

module.exports = model('User', User)