const mongoose = require('mongoose');

const solicitacaoSchema = new mongoose.Schema({
    ponto:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ponto',        
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',        
    },
    hora: String,
    dtColeta: String,
    materiais: Object,
    status: String
})

 

module.exports = mongoose.model('Solicitacao', solicitacaoSchema);
