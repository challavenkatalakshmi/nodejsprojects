const bcrypt=require('bcryptjs')

let user={
    name:'lucky',
    email:'lucky@gmail.com',
    password:'lucky@123'
}

let salt=bcrypt.genSaltSync(10);
let hashedPassword=bcrypt.hashSync(user.password,salt)

let updateduser={
    ...user,
    password:hashedPassword
}

//console.log(updateduser)
if(bcrypt.compareSync('lucky@123',hashedPassword)){
    console.log('password matched...')
}else{
    console.log('password not matched...')
}