// const http = require('http');



// const server = http.createServer((req , res)=> {
//   res.setHeader('Content-Type' , 'text/plain');
//   res.setHeader('cache-Control' , 'no-ache')


//   res.end('hellloooooooooo')
// })

// server.listen( 3000 , ()=> {
//   console.log('server running 3000');
// })

const http = require('http')

const server = http.createServer((req , res)=> {
  res.setHeader('Content-Type' , 'text/plain')
  res.setHeader('cache-Control' , 'no-cache')

  res.end('hell0oo')
})

server.listen(3000,()=>{
  console.log("serverrrrrr");
})