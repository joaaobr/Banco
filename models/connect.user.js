const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/banco')

const userSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    senha: {
        type: String
    },
    dinheiro: {
        type: Number
    },
    cpf: {
        type: Number,
        unique: true
    }
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel