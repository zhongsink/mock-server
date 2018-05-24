const server = require('./mock/server');
const port = 12333;

server.listen(port, () => {
    console.log('open mock server at localhost:' + port)
})