var fs=require("fs");


const val="This is the text from fileex1 written into ex.txt";

fs.appendFile("ex.txt",val,()=>{
    console.log("written successfully");
})
fs.readFile("ex.txt","utf8",(err,data)=>{
    console.log(data);
})