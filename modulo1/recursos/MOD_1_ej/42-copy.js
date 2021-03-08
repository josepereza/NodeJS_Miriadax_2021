
const fs = require('fs');

if (process.argv.length != 4){  // Wrong number of parameters?
  console.log('   syntax: "node 42-copy <orig> <dest>"');
  process.exit()                // Terminates node process
}

const [,, orig, dest] = process.argv; // ES6

// -> ES5 equivalent
// const orig = process.argv[2];
// const dest = process.argv[3];

const readStream = fs.createReadStream(orig);   // Open read stream
const writeStream = fs.createWriteStream(dest); // Open write stream

// Connects input & output with pipe, finishes when input stream finishes
readStream.pipe(writeStream);

console.log('   file copied');

