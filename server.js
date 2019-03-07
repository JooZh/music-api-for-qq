// 必备的库文件
const express = require('express')
const cache = require('apicache').middleware
const compression = require('compression')
const packageJson = require('./package.json')
const exec = require('child_process').exec
const ip = require('ip')

// 引入文件
require('./utils/colors')
const utils = require('./utils/utils')
const axios = require('./assets/axios')


// 解析 path 参数
function parsPath(path){
  let paths = {};
  let pathArr = path.split('/').filter(path => {
    return path !== null && path !== undefined && path !== '';
  })
  if(pathArr.length > 0){
    paths.router = `/${pathArr.pop()}`;
    paths.server = `/${pathArr.join('/')}`
  }else{
    paths.router = `/api`;
    paths.server = `/music`
  }
  return paths;
}

// 路由模式 ============================================================
function router(path = '/api') {
  if(path.split('/').length > 2){
    throw new Error('custom routing formats support only one hierarchy. eg: "/api" '.error)
  }else if(path.indexOf('/') !== 0){
    throw new Error('The route must be opened with "/". eg: "/api"'.error)
  }

  // 验证版本
  exec('npm info music-api-for-qq version', (err, stdout, stderr) => {
    if (!err) {
      let onlineVersion = stdout.trim()
      let localVersion = packageJson.version
      console.log(`[music-api] latest version: ${onlineVersion}, current version: ${localVersion}, please update timely.`.debug)
    }
  })
  // 创建路由
  const router = express.Router() 
  // 允许跨域
  router.use((req, res, next) => {
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
  // 开启 监听
  router.all(`${path}/*`, (req, res) => {
    let url = req.url;                             // 得到路径
    let query = req.query;                         // 得到参数
    let apiName = utils.getApiStr(url);            // 得到路由名称
    let getConfig = utils.getConfig(apiName,res);  // 读取配置文件
    if(getConfig){                                 // 请求资源
      axios(getConfig,query,res,apiName)
    }
  });
  // 需要将路由返回出去
  return router
}

// 服务模式 ============================================================
function server (options) {
  let port = (options && options.port) ? options.port : 8080;
  let cache = (options && options.cache) ? options.cache : false;
  let host = (options && options.host) ? options.host : 'localhost';
  let path = (options && options.path) ? options.path : '/music/api';
  // 判断
  if(path.indexOf('/') !== 0){
    throw new Error('The route must be opened with "/". eg: "/music/api"'.error)
  }
  // 解析当前传入的路由
  let paths = parsPath(path)

  const server = express()
  const route = router(paths.router)
  // 手动 ip 地址配置
  if(ip.isV4Format(host)){
    host = ip.address();
  }
  // 开启缓存
  if(cache && typeof cache === 'boolean'){
    server.use(cache('2 minutes', ((req, res) => res.statusCode === 200)))
  }else if(cache && typeof cache === 'number'){
    server.use(cache(`${cache} minutes`, ((req, res) => res.statusCode === 200)))
  }
  // 开启 gzip 压缩
  server.use(compression());
  // 使用路由
  server.use(paths.server, route);
  // 创建服务
  server.listen(port);
  // 输出请求接口信息
  console.log( `[music-api] server start: http://${host}:${port+path}/... `.debug,)
  // 将服务返回
  return server
}

module.exports = {
  router,
  server
}