app = require('./src/configuracoes/custom-express');

app.listen(process.env.PORT || 3000,()=>{
    console.log('Servidor esta sendo executado na porta 3000!');
})