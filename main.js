const http = require("http");
const request_listener = require('js/routing');

const port = 8080;

const server = http.createServer(request_listener);

server.listen(port);
console.log(`Server listening on ${port}`);