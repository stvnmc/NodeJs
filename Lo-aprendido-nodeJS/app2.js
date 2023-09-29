//consele.log(process);
//console.log(process.env);

//console.log(process.argv);

//for (let i = 2; i < process.argv.length; i++) {
//  console.log(process.argvs[i]);
//}

//console.log(process.memoryUsage());







//const os = require('os');

//console.log(os.type());
//console.log(os.homedir());
//console.log(os.uptime());
//console.log(os.userInfo());


//timers , seTimeout(),setImmediate(), setImmediate() , setInterval()



//function mostrarTema(tema) {
 // console.log(`Estoy aprendiendo ${tema}`);
//}

//setTimeout(mostrarTema, 1000, 'node.js1');
//setTimeout(mostrarTema, 2000, 'node.js2');
//setTimeout(mostrarTema, 3000, 'node.js3');
//setTimeout(mostrarTema, 4000, 'node.js4');
//setTimeout(mostrarTema, 5000, 'node.js5');
//setTimeout(mostrarTema, 6000, 'node.js6');
//setTimeout(mostrarTema, 7000, 'node.js7');


//function sumar(a, b){
  //console.log(a +b);
//}

//setTimeout(sumar, 2000, 5, 6);


//function mostrarTema(tema) {
  //console.log(`estyo aprendiendo ${tema}`);
//}

//setImmediate(mostrarTema, 'node.js');


function mostrarTema(tema) {
  console.log(`estoy aprendiendo ${tema}`);
}
setInterval(mostrarTema ,1500, 'Node.js');