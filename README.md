# music-api-for-qq
QQ 音乐的 Api 接口 本接口只用于前端各个技术栈的学习用，不能做为任何的商业用途。

## 前提
需要 NodeJS 8.12+ 环境

## 安装

```bash
$ npm install music-api-for-qq -D
```
插件提供了两个使用方式

## 独立服务
需要自己重新建立一个服务文件
```js
const express = require('express')
const musicApi = require('music-api-for-qq')

musicApi.server({
  port:7001,                // 启动端口  默认 8080
  host:'10.253.133.229',    // 开启使用 ip 访问  默认访问为 localhost
  cache:false,              // 开启缓存 默认关闭缓存， 传入 数字 为分钟 传入 false 关闭
  path: '/music/api'        // 自定义路径 默认为 /music/api
})  

console.log('http://10.253.133.229//music/api')
```
## 路由使用
做为路由使用是方便直接嵌入到现有的 webpack 工程项目中。

#### 在 vue-cli 项目中使用
这里只演示 基于webpack-dev-server 的配置方法。其他版本的 webpack 请自行配置
```js
// 1. 在 bulid 目录中找到 webpack.dev.conf.js 文件 引入插件 
const musicApi = require('music-api-for-qq')

// 2. 找到 devServer 对象 添加 before 属性使得插件做为路由使用 webpack-dev-server 的服务
devServer: {
  clientLogLevel: 'warning',
  historyApiFallback: {
    rewrites: [
      { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
    ],
  },
  // ......
  quiet: true, // necessary for FriendlyErrorsPlugin
  watchOptions: {
    poll: config.dev.poll,
  },

+ before: function(app) {
+  app.use('/music',musicApi.router('/api'))
+ }

}

```

## API 列表


