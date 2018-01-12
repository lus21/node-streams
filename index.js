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
    setInterval(() => {
        this.push(new Date().toString());
    }, 1000)    
    //   this.push(new Date());
    //   this.push(null);
    }
}
class MyWritable extends Writable {
    constructor (filePath){
        super();
        this.fd = fs.openSync(filePath, 'w',  (err, file) => {
            if (err) throw err;
            console.log('Saved!');
          });    
    }
    _write(chunk, encoding, callback) {
        console.log(this);
        fs.writeFile(this.fd, chunk,  (err)=> {
            if (err) throw err;
            console.log(chunk);
            console.log('Saved!');
            // done();
            callback();
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
