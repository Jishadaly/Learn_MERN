// const http = require('http');



// const server = http.createServer((req , res)=> {
//   res.setHeader('Content-Type' , 'text/plain');
//   res.setHeader('cache-Control' , 'no-ache')


//   res.end('hellloooooooooo')
// })

// server.listen( 3000 , ()=> {
//   console.log('server running 3000');
// })

// const http = require('http')

// const server = http.createServer((req , res)=> {
//   res.setHeader('Content-Type' , 'text/plain')
//   res.setHeader('cache-Control' , 'no-cache')

//   res.end('hell0oo')
// })

// server.listen(3000,()=>{
//   console.log("serverrrrrr");
// })

// const http = require('http')

// const server = http.createServer((req, res)=>{
//    res.setHeader('Content-Type' , 'text/plain')
//    res.setHeader('cache-Control' , 'no-cache')
//   res.end("hello")
// })

// server.listen(3000,()=>{
//   console.log('runnimg');
// })

const express = require('express')
const app =  express()
const port =  3000


const authMid = (req,res,next) =>{
  if (1+1 ===1) {
    next()
  }else{
    res.status(401).send("unautherized")
  }
}
app.get('/' , (req,res)=>{
  res.send("helo world")
})

app.get('/login',authMid ,(req,res)=>{
  res.send("login page")
})

 app.listen(port , ()=>{
  console.log("server is runining 3000");
 })
