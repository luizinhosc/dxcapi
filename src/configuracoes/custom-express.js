const express = require('express')
const app = express()
const roteador = require('../app/roteadores')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('segredoJwt',process.env.segredoJwt )
app.set('crypto', process.env.crypto)
app.set('chaveAcessoTemperatura',process.env.chaveAcessoTemperatura)
app.set('urlApi',process.env.urlApi)

roteador(app);

module.exports = app;