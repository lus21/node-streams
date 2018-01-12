const moment = require("moment");
const { Readable, Writable, Transform } = require("stream");
const fs = require('fs');


class MyReadable extends Readable {
    constructor (){
        super(); 
    }
    _read(size) {
        this.push(new Date().toString());
        const updateDateInterval = setInterval(() => {
            this.push(new Date().toString());
        }, 1000);    
    }
}
class MyWritable extends Writable {
    constructor (filePath){
        super();
        this.fd = fs.openSync(filePath, 'w',  (err, file) => {
            if (err) throw err;
        });    
    }
    _write(chunk, encoding, callback) {
        fs.appendFile(this.fd, chunk,  (err) => {
            if (err) throw err;
            console.log('Saved!');
            callback();
        });
    }
  }

class MyTransform extends Transform {
    constructor() {
      super();
    }
    _transform(chunk, encoding, callback) {
       this.push(moment(chunk.toString()).format());
        callback();
    }
    _flush(callback) {
        callback();
    }
  }  
  
const readStream = new MyReadable();
const transformStream = new MyTransform();
const writeStream = new MyWritable('./time.txt');

readStream.pipe(transformStream).pipe(writeStream);


// readStream.on('data', (data) =>{
//     console.log(data.toString());
//     writeStream.write(data.toString())
// }
// );
