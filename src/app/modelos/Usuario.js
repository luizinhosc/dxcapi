class Usuario {

    constructor(nome, email, senha) {

        Object.assign(this,
            {
                _nome: nome,
                _email: email,
                _senha: senha
            }
        )
        Object.freeze(this)

    }

    get nome() {
        return this._nome
    }

    get email() {
        return this._email
    }

    get senha() {
        return this._senha
    }

    set nome(nome){
        this._nome = nome
    }

    set email(email){
        this._email = email;
    }

    set senha(senha){
        this._senha = senha;
    }

}

module.exports = Usuario;