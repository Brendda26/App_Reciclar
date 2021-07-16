//index, show, store, update, destroy
const PedidoColeta = require("../models/pedidoColeta")

module.exports = {
    async listar(req, res) {
        const pedidoColeta = await PedidoColeta.find().populate('ponto').populate('usuario');

        return res.json(pedidoColeta);
    },    
    

    
    async adicionar(req, res){
        const {status, dia, pontoColeta,hora,materiais,usuario} = req.body;

        const pedidoColeta= await PedidoColeta.create({
           pontoColeta: pontoColeta,
           materiais: materiais,
           dia : dia, 
           usuario: usuario,
           hora : hora,
           status: "Solicitado"

        });

      	 	console.log(pedidoColeta)
         	res.json(pedidoColeta)
 },
 	 	 
 

  async relatorio(req, res) {
        const { dtInicial, dtFinal} = req.body;
        const pedidoColeta= await PedidoColeta.find({dia: {$gte:dtInicial}}).find({dia: {$lte:dtFinal}});
        res.json(pedidoColeta)
    },
    
    
   async alterar_dia(req, res) {
        const { _id, dia} = req.body;
        let pedidoColeta= await PedidoColeta.findById(_id);
        pedidoColeta.dia = dia;
        pedidoColeta.save();
        res.json(pedidoColeta)
    },


    
    async alterar(req, res) {
	const {_id, dia, pontoColeta_id,hora,materiais} = req.body;	 
        let  pedidoColeta = await PedidoColeta.findById(_id);
        
        pedidoColeta.pontoColeta = pontoColeta_id;        
        pedidoColeta.hora = hora;
        pedidoColeta.dia = dia;
        pedidoColeta.materiais = materiais;

        pedidoColeta.save();
        res.json( pedidoColeta)
    },
    
   async cancelar(req, res) {
        const { _id } = req.body;
        console.log(_id)
        const  pedidoColeta = await  PedidoColeta.findById(_id);

        pedidoColeta.status = "Cancelado";
        pedidoColeta.save();
        res.json( pedidoColeta)
    },
    

    async apagar(req, res) {
        let  pedidoColeta = await  PedidoColeta.deleteMany();
        
        res.json( pedidoColeta)
    }


    
};
