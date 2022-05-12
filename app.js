const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

//Parte de segurança do servidor
app.use(cors({ origin: process.env.CORS_ORIGIN || '*'}))
app.use(helmet())
//------------------------------

app.use(express.json())

app.post('/login', (req,res,next) => {
    res.json({token:'123456'})
})

module.exports = app;