const express = require('express')
const app = express()
const roteador = require('../app/roteadores')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('segredoJwt','secret')
app.set('crypto', 'segredoDeEstado')
app.set('chaveAcessoTemperatura','4b08e7a8d3ed6417d6e057a0c4687d99')
app.set('urlApi','http://api.openweathermap.org/data/2.5/weather?')

roteador(app);

module.exports = app;