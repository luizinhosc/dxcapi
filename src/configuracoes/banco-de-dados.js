const { Sequelize} = require('sequelize')

const instancia = new Sequelize( {
    dialect: 'sqlite',
    storage: './database.db'
})

module.exports = instancia;