const climaRoteador = require('../roteadores/climaRoteador')
const usuarioRoteador = require('../roteadores/usuarioRoteador')

module.exports = async (app)=>{

    climaRoteador(app);
    usuarioRoteador(app);

}