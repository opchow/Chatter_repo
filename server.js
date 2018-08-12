const http = require('http')
    , fs = require('fs')
    , url = require('url')
    , port = 8000;

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    const uri = url.parse(req.url)
    switch (uri.pathname) {
        case '/':
            sendFile(res, 'public/index.html')
            break
        default: 
            console.log("Cannot find " + uri.pathname)
            res.end('404 - Not Found')
    }
});

server.listen(process.env.PORT || port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

function sendFile(res, filename, contentType) {
    contentType = contentType || 'text/html';

    fs.readFile(filename, function (error, content) {
        res.writeHead(200, { 'Content-type': contentType })
        res.end(content, 'utf-8')
    })
}