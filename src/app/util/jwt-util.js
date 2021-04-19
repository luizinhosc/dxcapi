const jwt = require('jsonwebtoken')
    ,{ promisify } = require('util')


    const verify = promisify(jwt.verify);

module.exports = async (req,resp,next)=>{
    const token = req.headers['x-access-token']
    if(token){
        try {
            await verify(token,process.env.segredoJwt)
            next()
        } catch (error) {
            return resp.status(401).json({auth: false, mensagemErro: 'Token Invalido'})
        }

    }else{
        return resp.status(401).json({auth: false, mensagemErro: 'Não foi possivel recuperar o token'})
    }
}
