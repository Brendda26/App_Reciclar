const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



const CatadorSchema = new mongoose.Schema({

    nomeCatador: {
        type: String,
        required: [true, 'Não foi informado o nome!']
    }, 
    apelido: String,
    telefone: String,
    dtAdmissao: String,
    cpf:  {
        type: Number,
        required: [true, 'Não foi informado o CPF!']
    }, 
    rg: {
        type: Number,
        required: [true, 'Não foi informado o RG!']
    }, 
    dtNascimento : String,
    login: {
        type: String,
        required: [true, 'Não foi informado o login!'],
        unique: true
    },
    senha: {
        type: String,
        required: [true, 'Não foi informado a senha!']
    },   
    status: {type:Number, default: 1}  

});

module.exports = mongoose.model('Catador', CatadorSchema);
