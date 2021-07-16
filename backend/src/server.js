const express = require('express');
const mongosse = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');


const app = express();

//Conexão com Banco de Dados Mongo
mongosse.connect('mongodb+srv://tenhofe:tenhofe26@cluster0.uzcna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
 useNewUrlParser: true,
 useFindAndModify: true,
 useCreateIndex: true,
 useUnifiedTopology: true,

 
 
});

const db = mongosse.connection;
db.on("error",(error) => console.error(error));
//db.onse("open",() => console.log("Connected to the tadabase!"));


app.use(cors());
app.use(express.json());
app.use(routes);

//Porta utilizada pelo servidor
app.listen(3333);






