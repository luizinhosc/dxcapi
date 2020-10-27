const ClimaControlador = require('../controladores/climaControlador')
const climaControlador = new ClimaControlador
const auth = require('../util/jwt-util')

module.exports = async (app) => {

    app.get('/clima/:cidade',auth, await climaControlador.temperaturaAgora())

}