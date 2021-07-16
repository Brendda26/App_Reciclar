//index, show, store, update, destroy
const Usuario = require("../models/Usuario")

module.exports = {
    async listar(req, res) {
        const usuario = await Usuario.find();
        return res.json(usuario);
    },


    async adicionar(req, res) {

        const { nome, email, apelido, senha, login, status, tipo } = req.body;

        const usuario = await Usuario.create({
            nome,
            email,
            apelido,
            senha,
            login,
            status,
            tipo,

        });

        res.json(usuario)
    },

    //Verifica se o usuário exite e se a senha confere
    async validar(req, res) {

        const { login, senha } = req.body;
        let usuario;
    
        try {

            usuario = await Usuario.findOne({
                login: login
            });
            console.log(usuario);
        } catch (error) {
            console.log(error);
        }


        if (usuario == null) {
            res.json({ "_id": "0" });

        } else {
            if (senha == usuario.senha) {
                res.json(usuario);
            } else {
                res.json({ "_id": "0" });
            }
        }

    }
};

