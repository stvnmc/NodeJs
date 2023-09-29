let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

//Objeto -> Cadena de Caracteres
//cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCurso);
console.log(typeof infoCursoJSON);

// Cadena de caracteres -> Objeto

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCurso);