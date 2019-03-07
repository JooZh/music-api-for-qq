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
// 创建 server.js 文件
const musicApi = require('music-api-for-qq')

musicApi.server({
  port: 7001,                 // 启动端口  默认 8080
  host: '28.33.176.78',          // 开启使用 ip 访问  默认访问为 localhost
  path: '/music/api'          // 自定义路径 默认为 /music/api
  cache: false                // 开启缓存 默认关闭缓存， 传入 数字 为分钟 传入 false 关闭
})  

console.log('http://28.33.176.78:7001/music/api')

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

#### 推荐相关
| 获取推荐新发专辑： |  [http://localhost:8080/music/api/recommend_new_album](https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_new_album.md)    |
| ------ | ---- | 
| 获取推荐新发MV： |   [http://localhost:8080/music/api/recommend_new_mv](https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_new_mv.md)    |      |
|        |      |      |
|        |      |      |
 

获取推荐新发单曲： [http://localhost:8080/music/api/recommend_new_song](https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_new_song.md)
获取为你推荐歌单： [http://localhost:8080/music/api/recommend_songlist_hot](https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_songlist_hot.md)
获取标签推荐歌单： [http://localhost:8080/music/api/recommend_songlist_tag](https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_songlist_tag.md)

#### 歌曲相关
获取歌曲详情： [http://localhost:8080/music/api/song_detail](https://github.com/JooZh/music-api-for-qq/blob/master/docs/song_detail.md)
获取歌曲歌词： [http://localhost:8080/music/api/song_lyric](https://github.com/JooZh/music-api-for-qq/blob/master/docs/song_lyric.md)
获取歌曲播放连接： [http://localhost:8080/music/api/song_play](https://github.com/JooZh/music-api-for-qq/blob/master/docs/song_play.md)

#### 歌手相关
获取歌手列表： [http://localhost:8080/music/api/singer_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_list.md)
获取歌手详情： [http://localhost:8080/music/api/singer_detail](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_detail.md)
获取歌手关注度： [http://localhost:8080/music/api/singer_attention](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_attention.md)
获取歌手单曲列表： [http://localhost:8080/music/api/singer_song](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_song.md)
获取歌手歌单列表： [http://localhost:8080/music/api/singer_album](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_album.md)
获取歌手MV列表： [http://localhost:8080/music/api/singer_mv](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_mv.md)
获取歌手粉丝MV列表： [http://localhost:8080/music/api/singer_fans_mv](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_fans_mv.md)
获取相似歌手列表： [http://localhost:8080/music/api/singer_similar](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_similar.md)
获取歌手背景介绍： [http://localhost:8080/music/api/singer_desc](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_desc.md)

#### 评论相关
获取评论列表： [http://localhost:8080/music/api/commont_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/commont_list.md)

#### 排行榜相关
获取排行榜列表： [http://localhost:8080/music/api/top_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/top_list.md)
获取排行榜详情： [http://localhost:8080/music/api/top_detail](https://github.com/JooZh/music-api-for-qq/blob/master/docs/top_detail.md)

#### MV 相关
获取MV详情： [http://localhost:8080/music/api/mv_detail](https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_detail.md)
获取MV文字介绍： [http://localhost:8080/music/api/mv_info](https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_info.md)
获取相关MV推荐： [http://localhost:8080/music/api/mv_other](https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_other.md)
获取MV播放链接： [http://localhost:8080/music/api/mv_play](https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_play.md)