class ErroEmailCadastrado extends Error{
    constructor(email){
        const mensagem = `O email ${email} ja está cadastrado !`
        super(mensagem)
        this.name = 'EmailJaCadastrado'
        this.id_erro = 1
        
    }
}

module.exports = ErroEmailCadastrado