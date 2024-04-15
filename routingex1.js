const express=require('express')

const app=express();

app.get('/',function(req,res){
    res.send('home')
})

app.get('/alien',function(req,res){
    res.send('hi alienss...')
})
app.get('/alien/:id',function(req,res){
    const id=req.params.id
    res.send('hi user'+id)
})

app.listen(8000,function(req,res){
    console.log('success')
})