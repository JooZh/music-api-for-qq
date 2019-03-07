
const express = require('express')
const musicApi = require('./server')

let server = express()
let router = musicApi.router('/api')
server.use('/music',router)
server.listen(7001)

// musicApi.server({
//   port:7001,
//   host:'10.253.133.229',
//   cache:false,
// })
