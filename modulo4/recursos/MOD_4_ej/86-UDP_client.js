
// Usage:  "node 86-UDP_client <host> <port>"

let datagram = require('dgram');
let host = process.argv[2] || "localhost";
let port = process.argv[3] || 9000;

                              // Create socket
let socketUDP = datagram.createSocket('udp4');

                // Send keybord msg to server
process.stdin.on('data', (data) => {
  socketUDP.send(data, port, host);
});
                  // Send server msg to screen
socketUDP.on('message', (data) => {
  process.stdout.write(data+"");
});
               // a possible host or DNS error
socketUDP.on('error', function(err) {
	console.log(`Error: ${host}:${port}`);
	socketUDP.destroy();
	process.exit();
});

process.stdin.resume();       // Activate STDIN

