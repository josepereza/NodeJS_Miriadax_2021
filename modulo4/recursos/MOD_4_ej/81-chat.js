
// Usage:  "node 81-chat <port>"

let net = require('net');
let port = (process.argv[2] || 9000);
let clients = [];     // Array of connected clients

let server = net.createServer( (socket) => {

	clients.push(socket);          // add new client

	socket.on('end', function() {   // remove client
	    let i = clients.indexOf(socket);
	    clients.splice(i, 1);
	});
                       // send msg to other clients
	socket.on('data', function(msg) {
	    for (let i=0; i < clients.length; i++) {
	    	if (clients[i] !== socket) {
	    	    clients[i].write('-> ' + msg);
	    	}
	    }
	});
});

server.listen(port);
console.log("Chat server at port: " + port);

