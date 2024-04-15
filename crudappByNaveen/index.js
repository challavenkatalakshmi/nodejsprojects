const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/AlienDBex'

const index=express()

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

index.use(express.json())

const alienRouter=require('./routers/aliens')
index.use('/aliens',alienRouter)

index.listen(9000,()=>{
    console.log('server started')
})

