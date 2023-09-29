function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolamundo() {
    return 'hola mundo!';
}


// diferentes tipo de exportaciones 

//#1
//module.exports.saludar = saludar;
//module.exports.saludarHolamundo = saludarHolamundo;

//#2
module.exports = {
    saludar: saludar,
    saludarHolamundo: saludarHolamundo
};