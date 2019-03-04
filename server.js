// 必备的库文件
const express = require('express')
const cache = require('apicache').middleware
const compression = require('compression')
// const package = require('./package.json')
// const exec = require('child_process').exec

// 引入api文件
const utils = require('./utils/utils')
const axios = require('./assets/axios')

function createServer(server){
  // version check 版本检测
  // exec('npm info NeteaseCloudMusicApi version', (err, stdout, stderr) => {
  //   if (!err) {
  //     let onlineVersion = stdout.trim()
  //     let localVersion = package.version
  //     if (localVersion < onlineVersion) {
  //       console.log(`最新版本: ${onlineVersion}, 当前版本: ${localVersion}, 请及时更新`)
  //     }
  //   }
  // })
  // CORS 跨域检测
  server.use((req, res, next) => {
    if (req.path !== '/' && !req.path.includes('.')) {
      res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json; charset=utf-8'
      })
    }
    next()
  });

  // 开启缓存
  // server.use(cache('2 minutes', ((req, res) => res.statusCode === 200)))
  // 开启 gzip 压缩
  server.use(compression());
  // 开启 监听
  server.use((req, res) => {
    let url = req.url;                             // 得到路径
    let query = req.query;                         // 得到参数
    let apiName = utils.getApiStr(url);            // 得到路由名称
    let getConfig = utils.getConfig(apiName,res);  // 读取配置文件
    if(getConfig){                                 // 请求资源
      axios(getConfig,query,res,apiName)
    }
  });
}


// server.use('/', express.static(__dirname + "/home"))

function runServer(option){
  
  if(typeof option == 'number'){              // 如果传入了服务对象
    const server = express()  // 创建一个服务
    server.listen(option)     // 监听7001端口
    console.log('服务已经开启: ', `http://localhost:${option}`)
    createServer(server)
  }else{                      // 如果没有传入服务对象
    createServer(option)
  }
}

module.exports = runServer