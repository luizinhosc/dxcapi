const { DataTypes } = require('sequelize')
const instancia = require('../../configuracoes/banco-de-dados')

const colunas = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
const opcoes = {
    freezeTableName: true,
    tableName: 'usuarios',
    timestamps: true,
    createdAt: 'dataCriacao',
    version: 'versao'
}

module.exports = instancia.define('usuarios',colunas,opcoes)
