//importar a biblioteca do express
var express = require('express');

//criar um objeto do express
var app = express();

//ponto de acesso - endpoint
//request = requisições 
//response = resposta para as solicitações
app.get('/', function (request, response) {
    response.send('Thiago Xavier');
});

//endpoint de clientes
app.get('/clientes', function (request, response) {
    let clients = {
        "nome": "Thiago Xavier",
        "idade": 36
    }
    response.json(clients);
});

//escutar a porta 3000 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});