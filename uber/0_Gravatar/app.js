const avatar= require('gravatar')

let user={
    name:'lucky',
    email:'lucky@gmail.com',
    password:1234
}

let avatarUrl=avatar.url(user.email,{
    s:400,
    r:'pg',
    d:'mm'
})

let updateduser={
    ...user,
    profile:avatarUrl
}
console.log(updateduser)

