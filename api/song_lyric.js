
// 获取歌词
const base64 = require('js-base64').Base64
const Lyric = require('../utils/lyric')
const config = {
  url:'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
  options:{
    songmid: "001Qu4I30eVFYb"
  },
  handle:(res) => {
    let data = res.lyric
    let str = base64.decode(data)
    let lyric = new Lyric({
      lyricStr: str, // 歌词字符串
      lateTime: -800, //歌词延迟
    })
    return lyric
  }
} 

module.exports = config