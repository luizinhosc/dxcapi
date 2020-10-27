const {check, validationResult } = require('express-validator')

class UsuarioValidator{

    static async validacoes(req){
        try {
            let errors = []
            await check('email').isEmail().withMessage('Formato de email incorreto').run(req)
            await check('nome').isLength({min:5}).withMessage('O nome deve ter no minimo 5 caracteres').run(req)
            await check('senha').isLength({min:4}).withMessage('A senha deve ter no minimo 4 caracteres').run(req)
            errors = validationResult(req)
            return errors
        } catch (error) {
            throw new Error(`Erro desconhecido ${error.message}`)
        }
    }
}

module.exports = UsuarioValidator