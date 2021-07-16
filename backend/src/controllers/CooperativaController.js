//index, show, store, update, destroy
const Cooperativa = require("../models/Cooperativa")

module.exports = {
    async listar(req, res) {
        const cooperativa = await Cooperativa.findOne();

        return res.json(cooperativa);
    },
    
    
    async adicionar(req, res){
        const { nome, cnpj, endereco, qtCooperados } = req.body;

        const cooperativa= await Cooperativa.create({
           nome : nome,
           cnpj : cnpj,
           endereco : endereco,
           qtCooperados : qtCooperados

        });

        return res.json(cooperativa);
    },


    async alterar(req, res){
        const { nome, cnpj, endereco, qtCooperados } = req.body;
        const cooperativa = await Cooperativa.findOne();
        
        cooperativa.nome = nome;
        cooperativa.cnpj = cnpj;
        cooperativa.endereco = endereco;
        cooperativa.qtCooperados = qtCooperados;

        cooperativa.save();
        
        return res.json(cooperativa);
    },

    async remover(req, res){
        const cooperativa = await Cooperativa.findOneAndRemove();
        
        return res.json(cooperativa);
    }

    
};
