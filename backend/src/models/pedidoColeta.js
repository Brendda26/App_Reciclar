const mongoose = require('mongoose');

const pedidoColetaSchema = new mongoose.Schema({

    pontoColeta:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ponto',        
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',        
    },
    materiais: Object,
    dia: String,  
    hora: String,
    status: String,

    
})


module.exports = mongoose.model('pedidoColeta', pedidoColetaSchema);
