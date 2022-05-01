const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/banco')

const userSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    sobrenome: {
        type: String
    },
    idade: {
        type: Date
    },
    email: {
        type: String,
        unique: true,
    },
    senha: {
        type: String
    },
    saldo: {
        type: Number
    },
    cpf: {
        type: Number,
        unique: true,
        maxlength: 11
    }
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel