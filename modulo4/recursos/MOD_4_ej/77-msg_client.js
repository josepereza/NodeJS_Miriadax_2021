
// Usage:  "node 77-msg_client <host> <port>"

let net = require('net');
let host = (process.argv[2] || "localhost");
let port = (process.argv[3] || 9000);

let socket = net.createConnection(port, host);

process.stdin.on('data', function(data) { 
  socket.write(data);   // keyboard to server
});
                        // server to screen
socket.on('data', function(data) {
	process.stdout.write(`\nResponse:\n ${data}`); 
});

socket.on('error', function(e) {
	console.log(`No server at ${host} ${port}`); 
	socket.destroy();     // No server exists
	process.exit();
});

process.stdin.resume(); // Activate stdin

