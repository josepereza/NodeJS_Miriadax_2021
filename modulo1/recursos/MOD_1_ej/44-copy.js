
const fs = require('fs');     // Imports file system module

function readFileP (file) { // version promisificada de readFile(..)
    return new Promise(
        (resolve, reject) => fs.readFile( 
            file, 
            (err, data) => err ? reject(err) : resolve(data)
        )
    );
}

function writeFileP (file, data) { // version promisificada de writeFile(..)
    return new Promise(
        (resolve, reject) => fs.writeFile( 
            file, 
            data,
            (err) => err ? reject(err) : resolve()
        )
    );
}

if (process.argv.length != 4){  // Wrong number of parameters?
    console.log('   syntax: "node 44-copy <orig> <dest>"');
    process.exit()                // Terminates node process
}

const [,, orig, dest] = process.argv; // ES6

// -> ES5 equivalent
// const orig = process.argv[2];
// const dest = process.argv[3];

readFileP(orig)                                    // ejecutar promesa
.then(  (data) => writeFileP(dest, data))          // callback de éxito e lectura que arranca escritura
.then(  ()     => console.log('   file copied'))   // callback de éxito e escritura que envía mensaje
.catch( (err)  => console.log(err));               // callback de rechazo

