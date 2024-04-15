const fs=require('fs')
const path=require('path')
let mapRoutes=(req,res)=>{
    const url=req.url
    //res.end(`<h1 style="color:blueviolet">Welcome...</h1>`)
    if(url==='/'){
        fs.readFile(path.join(__dirname,'..','views','index.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }
    else if(url==='/about'){
        fs.readFile(path.join(__dirname,'..','views','about.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }
    else if(url==='/contact'){
        fs.readFile(path.join(__dirname,'..','views','contact.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }
    else if(url==='/service'){
        fs.readFile(path.join(__dirname,'..','views','service.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }else{
        res.end(`404 Not found`)

    }
};

module.exports={
    mapRoutes
}