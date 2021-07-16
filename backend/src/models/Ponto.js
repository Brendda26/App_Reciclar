const mongoose = require('mongoose');

const PontoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'Não foi informado o nome para o ponto!']
    },
    rua: String,
    bairro: String,
    pontoReferencia: String,
    responsavel: String,
    numero: String,
    diasColeta: String,
    horarios: String,
    publico:{type:Boolean, default: false },
    status: {type: Number, default: 1 }
})


module.exports = mongoose.model('Ponto', PontoSchema);
