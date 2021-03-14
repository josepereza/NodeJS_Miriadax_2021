
// Usage:  "node 85-UDP_serv <port>"

let datagram = require('dgram');
let port = process.argv[2] || 9000;
                                    // Create socket
let socketUDP = datagram.createSocket('udp4');

socketUDP.on('message', (data, client) => {  // Echo
  socketUDP.send(data, client.port, client.address);
});

socketUDP.on('error', (err) => {     // close socket
  socketUDP.close();
});

socketUDP.bind(port);        // Start server at port

console.log(`UDP Echo server at port: ${port}`);

