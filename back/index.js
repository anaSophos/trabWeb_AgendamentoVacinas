import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import conn from './db/conn.js';
import mongoose from 'mongoose';
import routes from './routes/routes.js';
import swaggerUi from "swagger-ui-express";
import swaggerDocs from './swagger_output.json' assert {type: 'json'};
import cors from 'cors'; // Importe o pacote cors

const app = express();

app.use(cors()); // Adicione o middleware cors

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

conn();

mongoose.connection.once('open', () => {
    console.log('Conexão feita no DB');

    const PORT = process.env.PORT || 3002;

    app.listen(PORT, () => {
        console.log('Servidor local rodando!');
    });
});
/*import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import conn from './db/conn.js'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import swaggerUi from "swagger-ui-express"
import swaggerDocs from './swagger_output.json' assert {type: 'json'}



const app = express()

app.use(express.json()) //processar solicitações json
app.use(express.urlencoded({extended: true}))

app.use('/', routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


conn()//estabelecendo conexao com o DB
mongoose.connection.once('open',()=>{

    console.log('Conexão feita no DB')
    
    const PORT = process.env.PORT || 3002

    app.listen(PORT, ()=>{
        console.log('Servidor local rodando!')
    })

})*/