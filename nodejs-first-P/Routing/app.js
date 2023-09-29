const { read } = require('fs');
const http = require('http');
const { join } = require('path');
const cursos = require('./curosos');

const servidor = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res);

        case 'POST':
            return manejarSolicitudGET(req, res);
        default:
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado por el servidor:${method}`);
    }
});


function manejarSolicitudGET(req, res) {


    console.log(res.statusCode);

    const path = req.url;
    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'aplication/json' });
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    } else if (path === '/curosos') {
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/curosos/programacion') {
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado nmo existe...')
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {


        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            res.end('El servidor recibio una solicitud POST para /cursos/programcion');
        });


        // return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el purto ${PUERTO}`);
});