const jwt =require('jsonwebtoken');

let user={
    id : 'abcd-101-sfsd-456461',
    name:'John',
    email:'john@gmail.com'
}

let payload={
    id:user.id,
    name:user.name
}
let secretkey='ssshhhh'
let token=jwt.sign(payload,secretkey,{expiresIn:3600})
console.log(token)
jwt.verify(token,secretkey,(err,decoded)=>{
    if(err) throw err;
    console.log(decoded)
})
