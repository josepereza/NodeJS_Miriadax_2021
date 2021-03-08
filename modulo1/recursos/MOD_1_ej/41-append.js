
var fs = require('fs');     // Imports file system module

if (process.argv.length != 4){  // Wrong number of parameters?
  console.log('   syntax: "node 41-append <orig> <dest>"');
  process.exit()                // Terminates node process
}

const [,, orig, dest] = process.argv; // ES6

// -> ES5 equivalent
// const orig = process.argv[2];
// const dest = process.argv[3];

fs.readFile(
  orig,                     // <orig> is the name of the origin file
  function(err, data) {     // callback, executes when read finishes
    if (err) throw err;
    fs.appendFile(
      dest,                 // <dest> is the name of the destination file
      data,                 // data from file <orig> to be written  
      function (err) {      // callback, executes when write finishes
        if (err) throw err;
        console.log('   file appended');
      }
    );
  }
);

