const { io } = require('../server');

//detectar cuando usuario se conecta
io.on('connection', (client) => {
    console.log('usuario conectado');

    //enviar al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    //detectar desconexion de usuario
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!'
        //     });
        // }

    });


});
