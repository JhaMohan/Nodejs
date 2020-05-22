const http = require('http')


const server = http.createServer((req,res)=>{

    if(req.url == '/') {
        console.log("Hellom world")
        res.write("Hello world")
        res.end()
    }

    if(req.url == '/api') {
        res.write("another api")
        res.end()
    }
     
})

server.listen(3000);

console.log('server listing on 3000.........')