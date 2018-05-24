const jsonServer = require('json-server')
const db = require('./db.js')
const routes = require('./routes.js')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(routes)
server.use(middlewares);

// 将 POST 请求转为 GET
server.use((request, res, next) => {
  request.method = 'GET';
  next();
})

server.use(rewriter)
server.use(router)
module.exports = server;