const fs=require('fs');
const path=require('path')

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})

fs.writeFile(path.join(__dirname,'files','new file.txt'),'writing into the file',(err)=>{
    if (err) throw err;
    console.log('write complete');
})

fs.appendFile(path.join(__dirname,'files','new file.txt'),'appending into the file',(err)=>{
    if (err) throw err;
    console.log('append complete');
})

process.on('unCaughtException',err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})