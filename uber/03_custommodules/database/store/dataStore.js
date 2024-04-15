const fs=require('fs');
const path=require('path');

// let getAllEmployees=()=>{
//     fs.readFile(path.join(__dirname,'employees.json'),'utf-8',(err,data)=>{
//         if(err) throw err;
//         console.log(data)
//     })
// }

let getAllEmployees=(callback)=>{
    fs.readFile(path.join(__dirname,'employees.json'),'utf-8',(err,data)=>{
        if(err) throw err;
        callback(data)
    })
}
module.exports={
    getAllEmployees
}