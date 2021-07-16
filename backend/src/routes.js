const express = require('express');

const Catador = require('./controllers/CatadorController');
const Cooperativa = require('./controllers/CooperativaController');
const Ponto = require('./controllers/PontoController');
const Usuario = require('./controllers/UsuarioControler');
const Solicitacao = require('./controllers/SolicitacaoController');
const pedidoColeta = require ('./controllers/pedidoColetaController');

const routes = express.Router();


// Rotas para pedido Coleta
routes.post('/pedidoColeta/adicionar',pedidoColeta.adicionar);
routes.post('/pedidoColeta/cancelar', pedidoColeta.cancelar);
routes.get('/pedidoColeta/listar', pedidoColeta.listar);

//routes.get('/pedidoColeta/enviar',pedidoColeta.enviar);


//Rotas para Cooperativa
routes.get('/cooperativa/listar', Cooperativa.listar);
routes.post('/cooperativa/alterar', Cooperativa.alterar);

routes.post('/cooperativa/adicionar', Cooperativa.adicionar);
routes.delete('/cooperativa/remover', Cooperativa.remover); 


//Rotas para Ponto de Coleta
routes.get('/ponto/listar', Ponto.listar);
routes.post('/ponto/adicionar', Ponto.adicionar);
routes.post('/ponto/alterar', Ponto.alterar);

//Rotas para Catadores
routes.get('/catador/listar', Catador.listar);
routes.post('/catador/adicionar', Catador.adicionar);
routes.post('/catador/alterar', Catador.alterar);

routes.delete('/catador/remover',Catador.remover); 
routes.post('/catador/validar', Catador.validar);


//Rotas para Usuários
routes.get('/usuario/listar', Usuario.listar);
routes.post('/usuario/adicionar', Usuario.adicionar);
routes.post('/usuario/validar', Usuario.validar);

//Rotas para Solicitações
routes.get('/solicitacao/listar', Solicitacao.listar);
routes.post('/solicitacao/adicionar', Solicitacao.adicionar);
routes.post('/solicitacao/alterar', Solicitacao.alterar);
routes.post('/solicitacao/cancelar', Solicitacao.cancelar);
routes.get('/solicitacao/apagar_tudo', Solicitacao.apagar_tudo);
routes.post('/solicitacao/relatorio', Solicitacao.relatorio);

module.exports = routes
