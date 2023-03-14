// Criando uma constante para chamar o módulo express:
const express = require('express');
// Iniciando o express:
const app = express();
// Guardamos o express inicializado em uma constante, portanto, posso agora utilizar qualquer coisa do express utilizando o app.

app.listen('3000', console.log('Servidor rodando!'))
// Listen fica ouvindo o navegador na porta que foi passada e faz a função de jogar para dentro do navegador o que a gente precisar.

// Rodamos o comando "node index.js" no terminal para conseguir rodar a aplicação. No navegador, digitamos a URL "localhost:3000". 

// Criaremos uma função do próprio express que trabalha com rotas:
// Adicionamos a rota com "/", e após, o método http que seria o "get()"". Dentro do "get()", fala-se o que vai acontecer, vejamos:
app.route('/').get( (req, res) => res.send('Olá mundo!'));
app.route('/sobre').get( (req, res) => res.send('Olá mundo, na rota sobre'))

// req: requisição;
// res: response;
// send(): enviar;

