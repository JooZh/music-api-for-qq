
// const express = require('express')

const musicApi = require('./server')

// let server = express()
// let router = musicApi.router('/api')

// server.use('/',express.static(__dirname + "/demo"))

// server.use('/music',router)
// server.listen(7001)

musicApi.server({
  port:7001,
  host:'10.253.133.229',
  cache:true,
  use: function(server,express){
    server.use('/',express.static(__dirname + "/demo"))
  }
})
