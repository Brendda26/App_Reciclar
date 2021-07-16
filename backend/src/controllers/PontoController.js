//index, show, store, update, destroy
const Ponto = require("../models/Ponto")

module.exports = {
    async listar(req, res) {
        const ponto = await Ponto.find();
        
        return res.json(ponto);
    },
    
    
    async adicionar(req, res){
        const { nome, horarios, rua, bairro, pontoReferencia, numero, diasColeta, publico, status, responsavel} = req.body;
        
        const ponto= await Ponto.create({
           nome : nome,
           rua : rua,
           bairro : bairro,
           pontoReferencia : pontoReferencia,
           numero : numero,
           diasColeta : diasColeta,
           publico: publico,
           status: status,
           responsavel: responsavel,
           horarios: horarios,

        });
        res.json(ponto)
    },
    async alterar(req, res){
        const {_id, nome,horarios, rua, bairro, pontoReferencia, numero, diasColeta, publico, status,responsavel } = req.body;
        const ponto = await Ponto.findById(_id);
        
        ponto.nome = nome;
        ponto.rua = rua;
        ponto.bairro = bairro;
        ponto.pontoReferencia = pontoReferencia;
        ponto.numero = numero;
        ponto.diasColeta = diasColeta;
        ponto.publico = publico;
        ponto.status = status;
        ponto.responsavel = responsavel;
        ponto.horarios  = horarios;

        ponto.save();
        res.json(ponto)
    },
      async apagar(req, res) {
        let ponto = await pontos.deleteMany();
        
        res.json(ponto)
    }
    
};
