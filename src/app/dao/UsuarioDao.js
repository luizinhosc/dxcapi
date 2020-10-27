const Modelo = require('../modelos/ModeloTabelaUsuarios')

class UsuarioDao {

    constructor() {
        Modelo.sync();
    }

    async listaUsuarios() {
        Modelo.sync();
        return await Modelo.findAll()

    }

    async cadastraUsuario(req) {
        const cadastro = req.body
        Modelo.sync()
        return await Modelo.create(cadastro).save

    }

    async apaga(idUsuario) {
        return await Modelo.destroy({
            where: {
                id: idUsuario
            }
        })

    }

    async retornaUsuarioPeloId(idUsuario) {
        return await Modelo.findAll({
            where: {
                id: idUsuario
            }
        })

    }

    async validaEmailExistente(email) {
        return await Modelo.findOne({
            where: {
                email: email
            }
        })

    }

}

module.exports = UsuarioDao;