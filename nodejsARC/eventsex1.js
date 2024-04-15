var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('updateStudent',(a,b)=>{
    console.log("custom event invoked,for updateStudent."+a+b);
    eventEmitter.emit('readAllStudents');
});

eventEmitter.on('readAllStudents',(a,b)=>{
    console.log("Reading all students")
});

eventEmitter.emit('updateStudent',10,20);
