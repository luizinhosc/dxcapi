const UsuarioControlador = require('../controladores/usuarioControlador')
const usuarioControlador = new UsuarioControlador;
const auth = require('../util/jwt-util')

module.exports= async (app)=>{

    app.get('/', (req, res) => {
        res.end('Estou no root da pagina no heroku !!!');
    })
    
    app.get('/usuario/listagem',  auth, await usuarioControlador.listagem())

    app.post('/usuario/cadastra', await usuarioControlador.cadastra())

    app.delete('/usuario/delete/:idUsuario', auth, await usuarioControlador.apaga())

    app.post('/usuario/login', await usuarioControlador.login())
    
    app.get('*', (requisicao, resposta)=>{
        resposta.status(404).json({mensagem: `a rota ${requisicao.originalUrl} não existe !!!!`})
    })

    app.post('*', (requisicao, resposta)=>{
        resposta.status(404).json({mensagem: `a rota ${requisicao.originalUrl} não existe !!!!`})
    })

    app.delete('*', (requisicao, resposta)=>{
        resposta.status(404).json({mensagem: `a rota ${requisicao.originalUrl} não existe !!!!`})
    })

}