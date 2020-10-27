class ListaUsuario{

    constructor(){
        this._usuarios = [];
    }

    adiciona(usuario){
        this._usuarios.push(usuario);
    }

}

module.exports = ListaUsuario;