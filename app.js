// const name  = "Sirjana";
// console.log(name);

// const amount = 12

// if(amount  <10 ){
//     console.log("less than the number");
// }
// else{ 
//    console.log("greater the numver");
//  }


// console.log(`Hey, this is ${name} first app`);




// GLOBALS - NO WINDOW
// __dirname - path to current directory
// __filename - function to use modules(CommonJs)
// module      - info about current module(file)
// process - info about env where the program is being executed

// console.log(__dirname)
// setInterval(() =>{
//     console.log("Hello, This si Sirjana");
// }, 2000

// )
// console.log(__filename)


// module
// vanilla js
// react js



// const names = require('./name')
// const sayHi = require('./utils')
// console.log(sayHi)
// console.log(names)


// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(secret)


// Module - Encapsulate Code (only share minimum)
// every file in node in module


// built in module
// os, path, fs, http
// const os = require('os')
// // info about current user
// const user = os.userInfo()
// console.log(user);

// //method retuns the system uptime in secocnds
// console.log(   `The system Uptime is ${os.uptime()} seconds`)


// const currentOS = {
//     name: os.type(),
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS)



// const path = require('path')

// console.log(path.sep)
// const filePath = path.join('/newfolder/', 'folder', 'text.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'newfolder', 'folder', 'abc.txt')
// console.log(absolute)jj


// const {readFileSync, writeFileSync} = require('fs')
// console.log("start")

// const abc = readFileSync('./newfolder/folder/abc.txt', 'utf8')
// const first =readFileSync('./newfolder/first.txt', 'utf8')


// console.log(abc, first)


// writeFileSync('./newfolder/result.txt', 
//     `Here us the result of ${abc} and ${first}`,{flag: 'a'}
// )

// console.log('Done with this task')
// console.log('Starting the next one')


//synchronous file

// const {readFile, writeFile} = require('fs')

// readFile('./newfolder/first.txt','utf8',(err, result) =>{
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })




//Server Side

//HTTP: Hyper  Text Transefer Protocol

// const http = require('http');
// const server = http.createServer((req, res) =>{

//     if (req.url === '/'){
//         res.end("This is home page")
//     }

//     if (req.url === '/about'){
//         res.end('Here is our short history')
//     }
// // console.log(re)
// // res.write('Welcome to Our Homepage')
//     res.end(`
//         <h1>Opps </h2>
//         <p> You are in the wrong page</p>
//         <a href = '/'> Return to Home page</a>
//         `)
//     })


//  server.listen(5000)
