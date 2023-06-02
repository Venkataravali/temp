const http  = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home page')
    }
    if(req.url === '/about'){
        req.end('Assured history')
    }
    res.end(`
    <h1>Oops !</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home </a>
    `)

})
server.listen(5000) //server is listening to this port