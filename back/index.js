import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import conn from './db/conn.js'
import mongoose from 'mongoose'
import routes from './routes/routes.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)


conn()
mongoose.connection.once('open',()=>{

    console.log('Conexão feita no DB')
    
    const PORT = process.env.PORT || 3002

    app.listen(PORT, ()=>{
        console.log('Servidor local rodando!')
    })

})