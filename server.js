const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) =>{
    

    if (req.url === '/'){
        const file = path.join(__dirname, 'index.html')
        fs.readFile(file, (err, data) =>{
            if (err) throw err;

            res.writeHead(200, {'Content-type': 'text/html'})

            res.write(data)
            res.end()
        })

        
    } else {
        res.writeHead(404, {'Content-type': 'text/html'})
        res.write(`<h1>404 ${req.url} not Found!</h1>`)
        res.end()
    }

    if (req.url !== '/favicon.ico') console.log(`STATUS:${res.statusCode}   ROUTE: ${req.url}`)
    
});

server.listen(3000, () => console.log('Server is running.\nListening on port 3000 ...'))