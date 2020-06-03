const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello from express")
})
app.get('/user', (req, res) => {
    res.send("User from express")
})

app.listen(3000, () => {
    console.log('Express sever start..')
})

//-----------------------//

const http = require('http')
const sever = http.createServer()

sever.on('request', (req, res) => {
    if(req.url === '/') {
        res.end('Hello from http nodejs')
    }
    if(req.url === '/user') {
        res.end('User from http node.js')
    }
})
sever.listen(8080, () => console.log('HTTP sever start...8080'))