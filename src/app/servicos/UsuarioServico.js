const UsuarioDao = require('../dao/UsuarioDao')
const erroEmailCadastrado = require('../erros/erroEmailCadastrado')
const jsonWebToken = require('jsonwebtoken')
const moment = require('moment')
const Crypto = require('../util/crypto')

class UsuarioServico {

  static async listaUsuarios() {
    const usuarioDao = new UsuarioDao();
    return await usuarioDao.listaUsuarios();

  }

  static async cadastraUsuario(requisicao) {
    try {
      const usuarioDao = new UsuarioDao();
      const email = requisicao.body.email;
      const emailJaCadastrado = await this.emailExistente(email);
      if (emailJaCadastrado) {
        throw new erroEmailCadastrado(email);
      } else {
        return await usuarioDao.cadastraUsuario(requisicao);
      }

    } catch (error) {
      throw new Error(error.message)
    }

  }

  static async apaga(requisicao) {

    try {
      const idUsuario = requisicao.params.idUsuario;
      const usuarioDao = new UsuarioDao();
      const usuarioEncontrado = await usuarioDao.retornaUsuarioPeloId(idUsuario);
      if (usuarioEncontrado.length > 0) {
        return await usuarioDao.apaga(idUsuario);
      } else {
        throw new Error(`O id ${idUsuario} nao foi encontrado !`)
      }

    } catch (error) {
      throw new Error(error.message)
    }

  }

  static async emailExistente(email) {

    try {
      const usuarioDao = new UsuarioDao();
      const usuario = await usuarioDao.validaEmailExistente(email);
      console.log(usuario);
      if (usuario) {
        return true;
      } else {
        return false;
      }

    } catch (erro) {
      throw new Error(erro.message)
    }
  }

  static async login(req) {
    try {
      const { email, senha } = req.body

      console.log(`Requisicao :  email: ${email} ///////// senha: ${senha}`);

      const usuarioDao = new UsuarioDao();
      const usuario = await usuarioDao.validaEmailExistente(email);

      const senhaDesencriptada = await Crypto.desencriptaSenha(senha)
      console.log(`Senha desencriptada: ${senhaDesencriptada}`);

      if (usuario === null) {
        throw new Error(`Email nao localizado !`)
      } else if (email !== usuario.email || senhaDesencriptada !== usuario.senha) {
        throw new Error(`Credenciais invalidas !`)
      } else {
        const token = await jsonWebToken.sign({
          sub: email,
          exp: moment().add(10, 'minutes') / 1000
        }, app.get('segredoJwt'))
        console.log(token);
        return token
      }


    } catch (error) {
      throw new Error(error.message)
    }

  }
}
module.exports = UsuarioServico