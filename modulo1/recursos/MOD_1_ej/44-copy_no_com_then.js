
const fs = require('fs');

function readFileP (file) {
    return new Promise(
        (resolve, reject) => fs.readFile( 
            file, 
            (err, data) => err ? reject(err) : resolve(data)
        )
    );
}

function writeFileP (file, data) {
    return new Promise(
        (resolve, reject) => fs.writeFile( 
            file, 
            data,
            (err) => err ? reject(err) : resolve()
        )
    );
}

if (process.argv.length != 4){
    console.log('   syntax: "node 44-copy <orig> <dest>"');
    process.exit();
}

const [,, orig, dest] = process.argv;

readFileP(orig)
.then(  (data) => writeFileP(dest, data))
.then(  ()     => console.log('   file copied'))
.catch( (err)  => console.log(err));

