const fs = require('fs');
var d = read();
console.log('D : ',d);
var data = fs.readFileSync('file.txt');
console.log('Data : ',data);

function read(){
    for (let index = 0; index < 100000000000; index++) {
        
    }
    return 'Complete !!'
}