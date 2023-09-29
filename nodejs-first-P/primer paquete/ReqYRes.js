const { application } = require('express');
const http = require('http');

const servidor = http.createServer((req, res) => {


    console.log('===> res(respuesta');
    console.log(res.statusCode); //200 OK
    res.statusCode = 404;
    console.log(res.statusCode);//404 Not Found

    res.setHeader('content-type', application / json);
    console.log(res.getHeaders()); s

    // console.log('===> req (solicitud');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    res.end('Hola mundo')
});

const puerto = 3000;
servidor.listen(3000, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
});