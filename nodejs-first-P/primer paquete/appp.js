function ordernarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`ordenardo: ${producto}`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('ordenando una taza');
            } else {
                reject('Este producto no esta disponible');
            }
        }, 2000);
    });
};
function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando repuesta...');
        console.log(`la respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra. Disfruta tu producto')
        }, 4000)
    });
}

// ordernarProducto('taza')
//     .then(repuesta => {
//         console.log('Repuesta recibida');
//         console.log(repuesta);
//         return procesarPedido(repuesta);
//     })
//     .then(respuestaProcedada => {
//         console.log(respuestaProcedada);
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function realizarPedido(producto) {
    try {
        const respuesta = ordernarProducto(producto);
        console.log('Respuesta recibi');
        const respuestaProcedada = procesarPedido(respuesta);
        console.log(respuestaProcedada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');