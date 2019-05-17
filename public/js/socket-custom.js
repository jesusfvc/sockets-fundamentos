var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor');
});

//enviar al server
socket.emit('enviarMensaje', {
    usuario: 'Jesus',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta: ', resp);
});

//escuchar al servidor
socket.on('enviarMensaje', function (msg) {
    console.log("Servidor: ", msg);
});
