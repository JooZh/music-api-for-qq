
const express = require('express')
const runServer = require('./server')

// 可以自己创建一个服务后传入
const server = express()  // 创建一个服务
server.listen(7001)     // 监听7001端口
console.log('服务已经开启: ', `http://localhost:7001`)
runServer(server);

// 也可以直接监听某个端口自动创建服务。
// runServer(8080);