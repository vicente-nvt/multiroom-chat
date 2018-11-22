var app = require('./config/server');

var server = app.listen(3000, () => {
    console.log("Servidor online");
});

require('socket.io').listen(server);