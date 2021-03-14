
// Usage:  "node 80-echo_serv <port>"

let net = require('net');
let port = (process.argv[2] || 7);

let server = net.createServer((socket) => {
	socket.write('Welcome (Echo server)\n');

	socket.on('data', function(data) {
	    socket.write(data); // Send back echo
	});
});

server.listen(port);

console.log("Echo server at port: " + port);

