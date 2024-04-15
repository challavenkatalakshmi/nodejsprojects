const http=require('http')
const path=require('path')
const fs=require('fs')
const router=require('./router/appRoute')

const hostname='127.0.0.1';
const port=5000;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    router.mapRoutes(req,res);
});

server.listen(port,hostname,()=>{
    console.log(`server starting at http://${hostname}:${port}`);
})