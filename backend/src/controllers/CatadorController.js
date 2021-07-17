//index, show, store, update, destroy
const Catador = require("../models/Catador")
const Usuario = require("../models/Usuario")

module.exports = {


    //Lista todos os catadores cadastrados
    async listar(req, res) {
        const catadores = await Catador.find()
        return res.json(catadores);
    },

    //Adiciona um novo catador
    async adicionar(req, res) {
        const { nomeCatador, apelido,telefone, dtAdmissao, cpf, rg, dtNascimento, status,login, senha, id_usuario } = req.body;
        const usuario = await Usuario.findById(id_usuario);
        const catador = await Catador.create({
            nomeCatador,
            apelido,
            telefone,
            dtAdmissao,
            cpf,
            rg,
            dtNascimento,
            login,
            senha,
            status,
            usuario
        });

        res.json(catador)
    },

    //Altera um catador já cadastrado
    async alterar(req, res) {
        const {  nomeCatador, apelido,telefone, dtAdmissao, cpf, rg, dtNascimento, status,login, senha, _id_usuario } = req.body;
        const catador = await Catador.findById(_id);
	
	    catador.nomeCatador = nomeCatador;
	    catador.apelido = apelido;
        catador.telefone = telefone;
        catador.dtAdmissao = dtAdmissao;
        catador.cpf = cpf;
        catador.rg = rg;
        catador.dtNascimento = dtNascimento;
        catador.login = login;
        catador.senha = senha;
        catador.status = status;
        
        catador.save();
        res.json(catador)
    },
    
     async remover(req, res) {
        let catador = await Catador.deleteMany();
        
        res.json(catador)
    },
    
     async validar(req, res) {

        const { login, senha } = req.body;
        let catador;
    
        try {

            catador = await Catador.findOne({
                login: login
            });
            console.log(catador);
        } catch (error) {
            console.log(error);
        }


        if (catador == null) {
            res.json({ "_id": "0" });

        } else {
            if (senha == catador.senha) {
                res.json(catador);
            } else {
                res.json({ "_id": "0" });
            }
        }

    }
    
    
};
