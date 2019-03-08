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
  port: 7001,                           // 启动端口  默认 8080
  host: '28.33.176.78',                 // 开启使用 ip 访问  默认访问为 localhost
  path: '/music/api',                   // 自定义路径 默认为 /music/api
  cache: false,                         // 开启缓存 默认关闭缓存， 传入 数字 为分钟 传入 false 关闭
  use: function(server,express){        // 自定义的使用其他插件
    server.use('其他插件');
    server.use('/',express.static(__dirname + "/demo"))
  }
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

// 3. 然后请求 http://localhost:8080/music/api/.... 即可
}

```

## API 列表

<table>
    <tr>
        <th colspan="2" align="left">推荐相关</th>
    </tr>
    <tr>
        <td>获取推荐新发专辑：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_new_album.md" target="_blank">http://localhost:8080/music/api/recommend_new_album</a></td>
    </tr>
    <tr>
        <td>获取推荐新发MV：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_new_mv.md" target="_blank">http://localhost:8080/music/api/recommend_new_mv</a></td>
    </tr>
    <tr>
        <td>获取推荐新发单曲：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_new_song.md" target="_blank">http://localhost:8080/music/api/recommend_new_song</a></td>
    </tr>
    <tr>
        <td>获取为你推荐歌单：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_songlist_hot.md" target="_blank">http://localhost:8080/music/api/recommend_songlist_hot</a></td>
    </tr>
    <tr>
        <td>获取标签推荐歌单：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/recommend_songlist_tag.md" target="_blank">http://localhost:8080/music/api/recommend_songlist_tag</a></td>
    </tr>
    <tr>
        <th colspan="2" align="left">歌曲相关</th>
    </tr>
    <tr>
        <td>获取歌曲详情：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/song_detail.md" target="_blank">http://localhost:8080/music/api/song_detail</a></td>
    </tr>
    <tr>
        <td>获取歌曲歌词：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/song_lyric.md" target="_blank">http://localhost:8080/music/api/song_lyric</a></td>
    </tr>
    <tr>
        <td>获取歌曲播放连接：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/song_play.md" target="_blank">http://localhost:8080/music/api/song_play</a></td>
    </tr>
    <tr>
        <th colspan="2" align="left">歌手相关</th>
    </tr>
    <tr>
        <td>获取歌手列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_list.md" target="_blank">http://localhost:8080/music/api/singer_list</a></td>
    </tr>
    <tr>
        <td>获取歌手详情：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_detail.md" target="_blank">http://localhost:8080/music/api/singer_detail</a></td>
    </tr>
    <tr>
        <td>获取歌手关注度：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_attention.md" target="_blank">http://localhost:8080/music/api/singer_attention</a></td>
    </tr>
    <tr>
        <td>获取歌手单曲列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_song.md" target="_blank">http://localhost:8080/music/api/singer_song</a></td>
    </tr>
    <tr>
        <td>获取歌手歌单列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_album.md" target="_blank">http://localhost:8080/music/api/singer_album</a></td>
    </tr>
    <tr>
        <td>获取歌手MV列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_mv.md" target="_blank">http://localhost:8080/music/api/singer_mv</a></td>
    </tr>
    <tr>
        <td>获取歌手粉丝MV列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_fans_mv.md" target="_blank">http://localhost:8080/music/api/singer_fans_mv</a></td>
    </tr>
    <tr>
        <td>获取相似歌手列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_similar.md" target="_blank">http://localhost:8080/music/api/singer_similar</a></td>
    </tr>
    <tr>
        <td>获取歌手背景介绍：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_desc.md" target="_blank">http://localhost:8080/music/api/singer_desc</a></td>
    </tr>
    <tr>
        <th colspan="2" align="left">评论相关</th>
    </tr>
    <tr>
        <td>获取评论列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/commont_list.md" target="_blank">http://localhost:8080/music/api/commont_list</a></td>
    </tr>
    <tr>
        <th colspan="2" align="left">排行榜相关</th>
    </tr>
    <tr>
        <td>获取排行榜列表：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/top_list.md" target="_blank">http://localhost:8080/music/api/top_list</a></td>
    </tr>
    <tr>
        <td>获取排行榜详情：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/top_detail.md" target="_blank">http://localhost:8080/music/api/top_detail</a></td>
    </tr>
    <tr>
        <th colspan="2" align="left">MV相关</th>
    </tr>
    <tr>
        <td>获取MV详情：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_detail.md" target="_blank">http://localhost:8080/music/api/mv_detail</a></td>
    </tr>
    <tr>
        <td>获取MV文字介绍：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_info.md" target="_blank">http://localhost:8080/music/api/mv_info</a></td>
    </tr>
    <tr>
        <td>获取相关MV推荐：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_other.md" target="_blank">http://localhost:8080/music/api/mv_other</a></td>
    </tr>
    <tr>
        <td>获取MV播放链接：</td>
        <td><a href="https://github.com/JooZh/music-api-for-qq/blob/master/docs/mv_play.md" target="_blank">http://localhost:8080/music/api/mv_play</a></td>
    </tr>
</table>

