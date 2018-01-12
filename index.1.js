const moment = require("moment");
const { Readable, Writable, Transform } = require("stream");
const fs = require('fs');


const createReadStream = fs.createReadStream(()=>{
    "asdasfsaf"
}).pipe(fs.createWriteStream('./time.txt'))
// const createWriteStream = fs.createWriteStream('./time.txt');
let test=moment().format();
setInterval(() => {
    console.log(test+ "\n");
    // createWriteStream.write(moment().format(), (err, b) => {
    //     if (err) throw err;
    // });
}, 1000)        
