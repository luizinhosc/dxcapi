const ErroEmailCadastrado = require('../erros/erroEmailCadastrado')
const UsuarioServico = require('../servicos/UsuarioServico')
const UsuarioValidador = require('../validadores/UsuarioValidator')

class UsuarioControlador{

    listagem(){

        return async (req, res) =>{
            try {
                res.status(200).json( await UsuarioServico.listaUsuarios())
                
            } catch (error) {
                res.status(500).json(`MensagemErro: ${error.message}` )
            }
        }

    }

    cadastra(){

        return async (req,resposta) =>{


            try {

               const erros = await  UsuarioValidador.validacoes(req);

               if(erros.isEmpty()){
                   await UsuarioServico.cadastraUsuario(req)
                   resposta.status(201).json(`mensagem: Usuario criado`)
               }else{
                   return resposta.status(400).json({erros: erros.array()})
               }

                
            } catch (error) {
                resposta.status(500).json(`mensagem: ${error}`)
            }
        }
    }

    apaga(){

        return async (req,resp)=>{

            try {
                await UsuarioServico.apaga(req);
                resp.status(200).json(`mensagem: O usuario foi excluido !!!`)
                
            } catch (error) {
                resp.status(500).json(`mensagem: ${error}`)
            }


        }
    }

    login(){
        return async (req,resp)=>{
            try {
                const token = await UsuarioServico.login(req)
                if(token){
                    resp.set('x-access-token', token)
                    resp.status(200).json(`autorizado: true`)
                }
            } catch (error) {
                resp.status(500).json(`mensagem: ${error}`)
            }
        }
    }

}

module.exports = UsuarioControlador;