//Modulo que contiene funcinalidad muy util para trabajr con el sistam de archivos 

//operaciones utiles, leer ,modificar , copiar , eliminar , cmbiar nombre. de archivos
//todos los metodos de este modo son asincronos por defecto
// pero puedes escoger versiones sincronas de estos metodos agreagando Sync a sus nombres



const fs = require('fs');



//Leer un archivo

console.log('Antes de leer el archivo...')

const archivo = fs.readFileSync('index.html', 'utf-8');
console.log(archivo);

console.log('despues de leer el archivo')






//Cambiar el nombre de una archivo

console.log('antes de cambiar el nombre')

const cambiarNombre = fs.renameSync('index.html', 'main.html');
console.log(cambiarNombre);

console.log('despues de cambiar el nombre')





//agregar contenido al final de un archivo.

console.log('antes de agragar contenido')

const agregarAlgo = fs.appendFileSync('main.html', '<p>Hola</p>');
console.log(agregarAlgo);

console.log('despues de agragar contenido')


// Remplazar todo el contenido del archivo

// fs.writeFile('index.html', 'contenido nuevo', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('contenido reemplazado exitosamente.');
// });


//eliminar archivos

// fs.unlink('index2.html', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Archivo eliminado');
// });