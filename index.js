const moment = require("moment");
const { Readable, Writable, Transform } = require("stream");
const fs = require('fs');


class MyReadable extends Readable {
    constructor (){
        console.log('readable constructor');
        super();    
    }
    _read(size) {
        console.log('readable _read');        
      let chunk= 'Lorem Ipsum...';
    //   const bff = new Buffer(size);
      // setInterval(() => {
//     moment().format()
// }, 1000)    
    //   this.push(chunk);
    //   this.push(null);
      console.log('readable null');      
       while (null !== (chunk = getNextChunk())) {
         this.push(chunk);
       }
    }
}
class MyWritable extends Writable {
    constructor (filePath){
        super();
        this.fd = fs.open(filePath, 'w');    
    }
    _write(chunk, encoding, callback) {
        fs.writeFile(this.fd, chunk, function (err) {
            if (err) throw err;
            console.log(chunk);
            console.log('Saved!');
            done();
        });
    }
  }

const readStream = new MyReadable();
const writeStream = new MyWritable('./time.txt');

readStream.pipe(writeStream);



// // const createReadStream = fs.createReadStream(()=>{});
// // const createWriteStream = fs.createWriteStream('./time.txt');
// let test=moment().format();
// setInterval(() => {
//     console.log(test+ "\n");
//     // createWriteStream.write(moment().format(), (err, b) => {
//     //     if (err) throw err;
//     // });
// }, 1000)        
