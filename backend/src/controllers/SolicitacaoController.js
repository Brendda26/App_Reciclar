//index, show, store, update, destroy
const Solicitacao = require("../models/Solicitacao");


module.exports = {

    async listar(req, res) {
        const solicitacao = await Solicitacao.find().populate('ponto').populate('usuario');
        return res.json(solicitacao);
    },


    async adicionar(req, res) {
        const { ponto, usuario, dtColeta, hora, materiais} = req.body;
        const solicitacao = await Solicitacao.create({
            ponto: ponto,
            usuario: usuario,
            dtColeta: dtColeta,
            hora: hora,
            materiais: materiais,
            status:"Solicitado"

        });
        console.log(solicitacao)
        res.json(solicitacao)
    },

    async relatorio(req, res) {
        const { dtInicial, dtFinal} = req.body;
        const solicitacao = await Solicitacao.find({dtColeta: {$gte:dtInicial}}).find({dtColeta: {$lte:dtFinal}});
        res.json(solicitacao)
    },

    async alterar_dt(req, res) {
        const { _id, dtColeta} = req.body;
        let solicitacao = await Solicitacao.findById(_id);
        solicitacao.dtColeta = dtColeta;
        solicitacao.save();
        res.json(solicitacao)
    },

    async alterar(req, res) {
        const { _id, dtColeta, hora, materiais, ponto_id } = req.body;
        let solicitacao = await Solicitacao.findById(_id);
        solicitacao.ponto = ponto_id;
        solicitacao.hora = hora;
        solicitacao.dtColeta = dtColeta;
        solicitacao.materiais = materiais;


        solicitacao.save();
        res.json(solicitacao)
    },

    async cancelar(req, res) {
        const { _id } = req.body;
        console.log(_id)
        const solicitacao = await Solicitacao.findById(_id);

        solicitacao.status = "Cancelado";
        solicitacao.save();
        res.json(solicitacao)
    },

    async apagar_tudo(req, res) {
        let solicitacoes = await Solicitacao.deleteMany();
        
        res.json(solicitacoes)
    }
};
