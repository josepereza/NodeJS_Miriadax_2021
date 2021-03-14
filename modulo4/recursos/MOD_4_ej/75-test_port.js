
// Usage:  "node 75-test_port <host> <port>"

let net = require('net');
let host = process.argv[2] || "localhost";
let port = process.argv[3] || 80;

let socket = net.createConnection(port, host);

socket.on('connect', function() {
  console.log(`Server at port ${port} of ${host}`);
  socket.removeAllListeners('error');
  socket.destroy();
});

socket.on('error', function() {
  console.log(`NO server at port ${port} of ${host}`);
});

