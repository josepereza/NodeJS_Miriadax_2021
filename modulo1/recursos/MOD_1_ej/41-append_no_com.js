
const fs = require('fs');

if (process.argv.length != 4){
  console.log('   syntax: "node 41-append <orig> <dest>"');
  process.exit()
}

const [,, orig, dest] = process.argv;

fs.readFile(
  orig,
  function(err, data) {
    if (err) throw err;  
    fs.appendFile(
      dest,
      data,
      function (err) {
        if (err) throw err;
        console.log('   file appended');
      }
    );
  }
);

