const fs=require('fs');
const path=require('path');

let writeToFile=(filename,data)=>{
    fs.writeFile(filename,data,(err)=>{
        if(err) throw err;
        console.log('Data store to a file...')
    });
};

module.exports={
    writeToFile
}