const climaServico = require('../servicos/ClimaServico')

class ClimaControlador{

    temperaturaAgora(){

        return async (req, resp)=>{

            try {
                const resposta = await climaServico.temperaturaAgora(req);
                if(resposta){
                    return resp.status(200).json(resposta)
                }
            } catch (error) {
                return resp.status(500).json(`mensagemErro: ${error}`)
            }

        }
    }

}

module.exports = ClimaControlador