const mongoose = require('mongoose');

const CooperativaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'Não foi informado o nome da cooperativa!']
    },
    
    cnpj: String,
    endereco: String,
    qtCooperados: Number,
    
})


module.exports = mongoose.model('Cooperativa', CooperativaSchema);
