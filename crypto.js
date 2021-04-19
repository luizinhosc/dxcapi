var CryptoJS = require("crypto-js");
 
// contrato q a api teria com o client  
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('123456', 'segredoDeEstado').toString();

console.log(ciphertext);


 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'segredoDeEstado');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(decryptedData);