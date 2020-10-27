const fetch = require('node-fetch')

class ClimaDao{

    async temperaturaAgora(URL){
        try {
            const resposta = await fetch(URL)
            if(resposta.status == 200){
                const json = await resposta.json()
                return json
            }else{
                throw new Erro (`Cidade nao localizada !`)
            }
        } catch (error) {
            throw new Erro (`Não foi possivel recupar os dados do servio ${error.message}`)
        }
    }

}
module.exports = ClimaDao