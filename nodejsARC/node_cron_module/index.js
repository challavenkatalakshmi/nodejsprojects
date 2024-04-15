const http=require('http')
const cron=require('node-cron')
const hostname = '127.0.0.1';
const port=3000;

const server = http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
    var task=cron.schedule('* * * * * *',()=>{
        console.log("Task submitted successfully.");
    });
    
    setTimeout(()=>{
        task.start();
    },3000);

    setTimeout(()=>{
        task.stop();
    },5000);
});