const express=require('express')
const app=express()
app.set('view engine','ejs')
//app.use(logger)

//LOGGER IS MIDDLEWARE
// function logger(req,res,next){
//     console.log(req.originalUrl)
//     next()
//}

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    //res.send('Hi')
    //res.status(500).send('HI')
    //res.status(500).json({message:'Error...'})
    //res.render('index')
    res.render('index')
})

const userRouter=require('./routes/users')
const postRouter=require('./routes/posts')

app.use('/users',userRouter)

app.use('/posts',postRouter)

app.listen(3002)