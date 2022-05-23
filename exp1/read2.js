const fs = require('fs');
fs.readFile('file.txt',function afterRead(err,data){
            console.log('Data : ',data);
        });

console.log('Something Else');