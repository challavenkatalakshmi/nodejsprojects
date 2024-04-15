const express=require('express')
const mongoose=require('mongoose')
const Article=require('./models/article')
const articleRouter=require('./routes/article')
const article = require('./models/article')
const methodOverride=require('method-override')
const app=express()

mongoose.connect('mongodb+srv://user1:user1@cluster0.eozrchc.mongodb.net/')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))
app.use('/article',articleRouter)



app.get('/',async (req,res)=>{
    const articles=await Article.find().sort({
        createdAt:'desc'
    })
    res.render('articles/index',{articles:articles})
})

app.listen(5003)