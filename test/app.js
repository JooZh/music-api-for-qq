

// 服务模式
const musicApi = require('../server');
// const c = require('child_process');
const ip = require('ip');

const host = ip.address();
const port = 7001;

musicApi.server({
  port: port,
  host: host,
  cache: false,
  use: function(server,express){
    server.use('/',express.static(__dirname + "/demo"))
  }
})

// 路由模式

// const express = require('express')
// const musicApi = require('./server');
// const c = require('child_process');
// const ip = require('ip');

// let server = express()
// let router = musicApi.router('/api')
// server.use('/',express.static(__dirname + "/demo"))
// server.use('/music',router)
// server.listen(7001)


// 启动浏览器
// c.exec(`start http://${host}:${port}/`);
