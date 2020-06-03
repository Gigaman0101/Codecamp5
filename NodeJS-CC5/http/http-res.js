const http = require('http')

http.createServer((req,res) => {
    res.writeHead(200, {'content-type' : 'text/html',
    'Codecamp' : 'five'
    })
    res.write('this is response message..')
    res.write('from yor local server')
    res.end('<H2> Good bye </H2>')
}).listen(8080, () => {console.log('Server start...')})