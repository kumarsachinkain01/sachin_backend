const express = require('express');
require('dotenv').config()


const app = express();




app.get('/', (req,res)=>{
    res.send('Hello Everyone welcome to the world of ExpressJS')
});

app.get('/twitter', (req,res)=>{
    res.send('Check out Twitter @ExpressJS')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Login to your ExpressJS account</h1>')
});

app.get('/youtube',(req,res)=>{
    res.send('<a href="https://www.youtube.com" target="_blank">Click To Youtube</a>')
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})