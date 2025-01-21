// // // // // console.log(__filename)
// // // // console.log(__dirname)
// // // // // console.log(global.console.log('d'));

// // // // const path = require('path')
// // // // const fs = require('fs');
// // // // // console.log(path.basename(__filename));
// // // // // const filePath = '/controller/authController/authController.ts'
// // // // // console.log(path.parse(filePath));

// // // // // console.log(path.extname('controller' , 'authController','authController.ts'));

// // // // const fileName = 'postController.js';
// // // // const dirPath = path.join(__dirname, '/controller/api/');
// // // // const filePath = path.join(dirPath, '',fileName);

// // // // console.log(dirPath);
// // // // console.log(filePath);

// // // // const newfile = fs.mkdir(filePath, {}, (e) => {
// // // //     console.log('rorororo' , e);

// // // // })


// // // // if (fs.existsSync(filePath)) {
// // // //     fs.mkdirSync(filePath)
// // // //     console.log('exsist at ', filePath);

// // // // } else {
// // // //     console.log('not');
// // // // }

// // // // fs.writeFile(filePath , 'console.log("file created");', (e)=>{
// // // //     if (e) {
// // // //         console.log('eror ' ,e);

// // // //     }else{
// // // //         console.log('creted filr at ', filePath);

// // // //     }

// // // // })

// // // // const EventEmitter = require('events');


// // // // class Downloader extends EventEmitter{
// // // //     download(file){
// // // //         console.log('startting downloading of ',file);
// // // //         setTimeout(() => {
// // // //             this.emit('progress',100)
// // // //             setTimeout(() => {
// // // //                 this.emit('progress',50)
// // // //                 this.emit('done', file);
// // // //             }, 2000);
// // // //         }, 1000);
// // // //     }
// // // // }

// // // // const downloader = new Downloader();

// // // // downloader.on('progress',(progress)=>{
// // // //     console.log('file downloading progress : ',progress);
// // // // });

// // // // downloader.on('done',(file)=>{
// // // //     console.log('done the file is : ',file);

// // // // })

// // // // downloader.download('video.mp4')

// // // const http = require('http');

// // // const hostname = '127.0.01';
// // // const port = 3000;

// // // // const server = http.createServer((req,res)=>{
// // // //     res.statusCode = 200;
// // // //     res.setHeader('Content-type' , "text/plain")
// // // //     res.end("welcome to htttp server");
// // // // })

// // // // server.listen(port , hostname , ()=>{
// // // //     console.log('server is running port at localhost:',port , 'host at : ',hostname);
// // // // })

// // // //simplify

// // // // const server = http.createServer((req, res) => {
// // // //     res.writeHead(200, { 'Content-Type': 'text/plain' });
// // // //     res.write('jishads server')
// // // //     res.end();
// // // //     // req.getMaxListeners
// // // // }).listen(port, hostname, () => {
// // // //     console.log('server i3000s running...');
// // // // })
// // // //local host

// // // const fs = require('fs')
// // // const url = require('url')

// // // http.createServer((req, res) => {
// // //     if (req.method === 'GET' && req.url === '/profile') {
// // //         res.writeHead(200, { 'content-type': 'application/json' });
// // //         const user = {
// // //             name: 'jishad',
// // //             age: 23
// // //         }
// // //         res.end(JSON.stringify(user))
// // //     } else if (req.method === 'GET' && req.url === '/') {
// // //         fs.readFile('message.txt', 'utf-8', (err, data) => {
// // //             if (err) {
// // //                 console.log(err);
// // //                 res.writeHead(500, { 'content-type': 'application/json' })
// // //                 res.end(JSON.stringify({ message: 'error' }))
// // //             } else {
// // //                 res.writeHead(200, { 'content-type': 'application/json' });
// // //                 res.end(JSON.stringify(data));
// // //             }
// // //         })
// // //         // res.write('home page')
// // //         // res.end()
// // //     }else if( req.method === 'PUT' && req.url === '/updateFile'){
// // //             const parsedUrl = url.parse(req.url , true);
// // //             console.log(parsedUrl);
// // //     }

// // //     else {
// // //         res.end('the method is not support ');
// // //     }

// // // }).listen(port, () => {
// // //     console.log('server is running....');
// // // });


// // const fs = require('fs')

// // const readebleStream = fs.createReadStream('message.txt', 'utf-8');

// //     const writeStream = fs.createWriteStream('message.txt')

// //     writeStream.write('Hello world! \n')
// //     writeStream.write('happy hacking!!!!')

// // readebleStream.on('data',(chunks)=>{
// //     console.log('chuinks after writing' ,chunks);

// // })



// // const fs = require('fs')


// // const readebleStream = fs.createReadStream('message.txt')
// // writebleStream.write
// // const writebleStream = fs.createWriteStream('output.txt')

// // readebleStream.pipe(writebleStream)

// // console.log('file copied');

// // const http = require('http')
// // const server = http.createServer((req , res)=>{
// //     res.writeHead(200 , {"content-type":'text/plain' , "transfer-encoding":'chunked'});
// //     res.write('first write')

// //     setTimeout(() => {
// //         res.write('second write')
// //     }, 3000);


// //     setTimeout(() => {
// //         res.write('third write')
// //         res.end()
// //     }, 3000);


// // })

// // const http = require('http')
// // const os = require('os')
// // const cluster = require('cluster')

// // if (cluster.isMaster) {
// //     const numCPUs = os.cpus().length;
// //     console.log(`Master process ${process.pid} is running`);


// //     for (let i = 0; i < numCPUs; i++) {
// //         cluster.fork()
// //     }

// //     cluster.on('exit', () => {
// //         console.log(`cluster died and reseteping`);
// //         cluster.fork()
// //     })


// // } else {
// //    http.createServer((req, res) => {
// //         res.writeHead(200)
// //         res.end('hello from ',process.pid)
// //     }).listen(4000,()=>{
// //         console.log('server is running');

// //     })

// //     console.log(`worker ${process.pid} started`);

// // }
// // const fs = require('fs')


// // fs.unlink('message.txt',(errr)=>{
// //     if (errr) {
// //         console.log(errr);
// //     }

// // })


// const express = require('express')

// const app = express()
// const fs = require('fs')
// const port = 3001;
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// const data = {
//     name: "jishad",
//     age: 23
// }

// const router = express.Router()

// router.get('/getUser', (req, res, next) => {
//     console.log(req.params.id);

//     if (toString(req.params.id) !== '123456789') {
//         res.status(200).json({ data: data })
//     } else {
//         res.status(400).json({ message: 'user id is not provided' })
//     }

// })

// const blocoPostMethod = (req, res, next) => {
//      if (req.method === 'POST') {
//         return res.status(500).json({message:'post methods are blocked'});
//      }

//      next()

// }

// app.use(blocoPostMethod)

// router.post('/double', (req, res) => {
//     const value1 = req.body.value1
//     const value2 = req.body.value2
//     if (value1 && value2) {
//         const sum = (2 * parseInt(value1)) + (2 * parseInt(value2))
//         fs.mkdir('./new', { recursive: true }, (err) => {
//             if (err) {
//                 console.log(err);
//                 res.status(400).json(err)
//             } else {
//                 fs.writeFile('./new/file.txt', 'this is new file', 'utf-8', (err) => {
//                     console.log('error creating a file in new directory', err);

//                 })
//             }

//         })
//         fs.writeFileSync('sum.txt', `sum is : ${sum.toString()} \n`, 'utf-8')
//         //  fs.appendFile('sum.txt',`sum is again : ${sum.toString() } \n` ,'utf-8')
//         // console.log(fileData);
//         // console.log('is exist ',  fs.existsSync('./new/file.txt'));


//         res.status(200).json({ data: sum })
//     }
// })

// app.use('/', router)

// app.listen(port, () => {
//     console.log(`server is running port http://localhost:${port}`);
// })

// create an express route which takes two numbers as query parameters and a route middleware to double the values and write the sum of two in a file named sum.txt


// const express = require('express')

// const app = express();
// let port = 3000;
// const fs = require('fs')

// const router = express.Router();

// router.get('/double', (req, res, next) => {
//     // console.log(req.query)
//     console.log('success');

// })

// const doubleValues = (req, res, next) => {
//     const { value1 , value2 } = req.query;

//     const sum = ( 2 * parseInt(value1) ) + ( 2 * parseInt(value2) );

//     fs.writeFileSync('sum.txt' , `sum : ${ sum }` , 'utf-8');

//     next()
// }

// app.use(doubleValues)

// app.use('/', router)

// app.listen(3000, () => {
//     console.log('server is running');
// })

// write a query using aggregation to find the number of students in class 10 whose marks are in between 40 and 60 or in between 80 and 90

// const express = require('express')

// const app = express();
// const port = 3000

// const router = express.Router();

// app.use('/',router);

// router.get('/double', (req,res,next)=>{
//     const { value1 , value2 } = req.query
//     const mod = value1 % value2;

//     res.status(200).json(mod);
// })

// app.listen(port , ()=>{
//     console.log('server is reunning');

// })



const express = require('express')

const app = express();
const port = 3000

app.use(express.json())

app.get('/:id',(req , res)=>{

    // console.log(req.params)

    const value1  = req.params.id;

    const {  value2 } = req.query;
    console.log(value1 , value2 )
    let diveded = (parseInt(value1)) % (parseInt(value2))
    console.log(diveded);
    

    res.status(200).send(diveded)
})


app.listen(port , ()=>{
    console.log('server is running..');
    
})