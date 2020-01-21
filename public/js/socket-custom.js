var socket = io();

//ESCUCHAR PROCESOS
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Conexión perdida con el servidor');
});

//ENVIAR INFORMACION
socket.emit('enviarMensaje', {
    usuario: 'Marlon',
    mensaje: 'Hola Mundo'
}, function( response ) {

    console.log('Respuesta server: ', response);
    
});

//ESCUCHAR INFORMACION
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
}); 
