const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
 
const UsuarioSchema = new mongoose.Schema({
    login:{
        type: String,
        required: [true, 'Não foi informado o login!'],
        unique: true
    },
    nome:{
        type: String,
        required: [true, 'Não foi informado o nome!']
    }, 
    apelido: String,  
    email:{
        type: String,
        uniqueCaseInsensitive: true 
    },
    senha: {
        type: String,
        required: [true, 'Não foi informado a senha!']
    },   
    status: {
        type: Number,
        default: 1,
    },
    // 1-Usuário 2-Catador 3-Administrador
    tipo: {
        type: Number,
        default: 1,
    }   
     
}, { 
    toJSON: {
         virtuals: true, 
    },  
}); 

module.exports = mongoose.model('Usuario', UsuarioSchema);


 
