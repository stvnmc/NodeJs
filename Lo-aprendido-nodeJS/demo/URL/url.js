const miURL = new URL('https://www.ejemplo.org/cursos/prograncion?ordenar=vistas&nivel=1');

console.log(miURL.hostname);
console.log(miURL.pathname);


console.log(miURL.searchParams);
console.log(miURL.searchParams.get('ordernar'));
console.log(miURL.searchParams.get('nivel'));

console.log(miURL.protocol);