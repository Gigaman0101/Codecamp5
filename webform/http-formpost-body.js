const http = require('http')
const fs = require('fs')
const formbody = require('body//form')

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req, res) => {
   if(req.url === '/') {
       return res.end(postHTML)
   }
   formbody(req, res, (err, body) => {
       if(err) {
           res.statusCode = 500
           return res.end('Have Error eith body...')
       }
       console.log(body.fname +  ' ' + body.lname)
       res.writeHead(200)
       res.write(`<p>ชื่อ : ${body.fname} , นามสกุล : ${body.lname} </p><hr>`)
       res.end(postHTML)
   })

}).listen(8080, () => {
    console.log('server start...')
})