import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config()
const app=express();

const PORT=process.env.PORT||5000;

app.get('/',(req,res)=>{
    res.send('Hello world!!!!!!!!!');
});

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log('server is running at',PORT);
})
