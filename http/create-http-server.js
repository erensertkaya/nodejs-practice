const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write("<b>hello</b> world");
    response.end();
});

server.listen(80);