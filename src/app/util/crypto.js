const CryptoJS = require('crypto-js')

class Crypto {

    static async desencriptaSenha(senha) {
        try {
            // Decrypt
            const bytes = await CryptoJS.AES.decrypt(senha, app.get('crypto'))
            const senhaDesencriptada = bytes.toString(CryptoJS.enc.Utf8)
            if(senhaDesencriptada){
                return senhaDesencriptada
            }else{
                return senha
            }
        } catch (error) {
            throw new Error(`Não foi possivel descriptografar a senha informada ${error.message}`)
        }
    }

}

module.exports = Crypto;