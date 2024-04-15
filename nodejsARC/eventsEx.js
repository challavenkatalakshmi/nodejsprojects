const eventEmitter=require('events');
const eventEm=new eventEmitter();

eventEm.on("hello",()=>{
    console.log("Hello world...");
});

eventEm.emit("hello");
eventEm.emit("hello");

eventEm.once("payment",(plan)=>{
    console.log("triggering Payment ",plan);
});

eventEm.emit("payment","Gold");
eventEm.emit("payment","Silver");

eventEm.on("removeListener",()=>{
    console.log("removing evnet listener");
});

eventEm.emit("removeListener");

eventEm.removeListener("removeListener",()=>{
    console.log("removed using removeListener");
});


