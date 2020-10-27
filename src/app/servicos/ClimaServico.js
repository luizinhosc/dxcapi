const ClimaDao = require('../dao/ClimaDao')
const climaDao = new ClimaDao
const formula = 273.15
class ClimaServico{

    static async temperaturaAgora(req){
        try {
            const cidade = req.params.cidade;
            const APIKEY = app.get('chaveAcessoTemperatura')
            const URI = new URL(app.get('urlApi'))

            URI.searchParams.append('q',cidade)
            URI.searchParams.append('appid',APIKEY)

            const resposta = await climaDao.temperaturaAgora(URI)
            if (resposta){
                const temperaturaFarenheigith = resposta.main.temp
                const temperatura = temperaturaFarenheigith - formula
                return ({temperaturaAtual: Math.round(temperatura) + ' graus Celsius',
                         cidade: resposta.name,
                         pais: resposta.sys.country})
            }else{
                throw new Error('Cidade não encontrada ')
            }

        } catch (error) {
            return new Error(`Erro recuperando a temperatura atual ! ${error.message}`)
        }
    }
}
module.exports = ClimaServico