// 必备的库文件
const express = require('express')
const apicache = require('apicache').middleware
const compression = require('compression')
const bodyParser = require('body-parser')
const packageJson = require('./package.json')
const exec = require('child_process').exec
const ip = require('ip')

// 引入文件
require('./utils/colors')
const utils = require('./utils/base')
const axios = require('./assets/axios')
const merge = require('./assets/merge')


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
    let apiName = utils.getApiName(req.url);                                          // 得到api名称
    let query = JSON.stringify(req.query) === "{}" ? req.body : req.query;            // 得到参数    
    let apiConfig = utils.getApiConfig(apiName, res);                                 // 读取配置文件
    let mergeReslut = merge(query, apiConfig)                                         // 合并参数
    if (apiConfig) {                                                                  // 请求资源
      axios(mergeReslut,apiName,res)
    }
  });

  // 需要将路由返回出去
  return router
}

// 服务模式 ============================================================
function server (options) {
  // 参数处理
  let port = (options && options.port) ? options.port : 8080;
  let cache = (options && options.cache) ? options.cache : false;
  let host = (options && options.host) ? options.host : 'localhost';
  let path = (options && options.path) ? options.path : '/music/api';

  // 判断路径是否错误
  if(path.indexOf('/') !== 0){
    throw new Error('The route must be opened with "/". eg: "/music/api"'.error)
  }
  // 解析当前传入的路由
  let paths = parsPath(path)

  // 创建服务 
  const server = express()

  // 手动 ip 地址配置
  if(ip.isV4Format(host)){
    host = ip.address();
  }

  // 使用传入的自定义 use 
  if(options && options.use && typeof options.use === 'function'){
    options.use(server,express)
  }

  // 开启缓存
  if(cache && typeof cache === 'boolean'){
    server.use(apicache('2 minutes', ((req, res) => res.statusCode === 200)))
  }else if(cache && typeof cache === 'number'){
    server.use(apicache(`${cache} minutes`, ((req, res) => res.statusCode === 200)))
  }else{
    server.use(function(req, res, next){
      res.append('Connection', 'keep-alive close');
      res.append('Cache-Control', 'no-cache');
      next();
    });
  }

  // 解析post参数
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({
    extended: false
  }));

  // 开启 gzip 压缩
  server.use(compression());

  // 使用路由
  server.use(paths.server, router(paths.router));
  
  // 创建服务
  server.listen(port);

  // 输出请求接口信息
  console.log( `[music-api] server start: http://${host}:${port+path}/... `.debug,)

  // 将服务返回 提供给外部使用
  return server
}

module.exports = {
  router,
  server
}