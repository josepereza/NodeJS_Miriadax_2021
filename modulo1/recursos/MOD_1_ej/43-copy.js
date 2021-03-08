
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
    console.log('   syntax: "node 43-copy <orig> <dest>"');
    process.exit()                // Terminates node process
}

const [,, orig, dest] = process.argv; // ES6

// -> ES5 equivalent
// const orig = process.argv[2];
// const dest = process.argv[3];


async function copy() {
    try {
        let data = await readFileP(orig);  // la asignación se realiza cuando finaliza la lectura del fichero
        await writeFileP(dest, data);   // la ejecución no continua hasta que finaliza la escritura del fichero
        console.log('   file copied');
    } catch (err) { console.log(err); }
}

copy();  // es necesario ejecutar la función async con el bloque de código con promesas

