const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido exitoso! Su pizaa esta en camino.');
        } else {
            reject('Ocurrio un error. Por favor intente nuevament.');
        }
    }, 3000);
});

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });