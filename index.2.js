const moment = require("moment");
const { Readable, Writable, Transform } = require("stream");
const fs = require('fs');


class MyReadable extends Readable {
    constructor (){
        super();    
    }
    _read(size) {
      let chunk= 'Lorem Ipsum...';
      push(chunk);
      push(null);
    //   while (null !== (chunk = getNextChunk())) {
    //     this.push(chunk);
    //   }
    }
}
class MyWritable extends Writable {
    constructor (filePath){
        super();
    this.fd = fs.open(filePath, 'w+');    
    }
    _write(chunk, encoding, callback) {
        fs.writeFile(this.fd, chunk, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
  }

// const readStream = new MyReadable();
// const writeStream = new MyWritable();

// readStream.pipe(writeStream);



// // const createReadStream = fs.createReadStream(()=>{});
// // const createWriteStream = fs.createWriteStream('./time.txt');
// let test=moment().format();
// setInterval(() => {
//     console.log(test+ "\n");
//     // createWriteStream.write(moment().format(), (err, b) => {
//     //     if (err) throw err;
//     // });
// }, 1000)        
