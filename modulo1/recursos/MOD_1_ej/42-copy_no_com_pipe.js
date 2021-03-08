
const fs = require('fs');

if (process.argv.length != 4){
  console.log('   syntax: "node 42-copy <orig> <dest>"');
  process.exit()
}

const [,, orig, dest] = process.argv;

const readStream = fs.createReadStream(orig);
const writeStream = fs.createWriteStream(dest);

readStream.pipe(writeStream);

console.log('   file copied');

