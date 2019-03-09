// 歌手关注度
const config = {
  url:'https://c.y.qq.com/rsc/fcgi-bin/fcg_order_singer_getnum.fcg',
  options:{
    singermid: "002J4UUk29y8BY"
  },
  handle: (res) => {
    let newData = {
      num: res.num,
      str: `${(res.num/10000).toFixed(1)}万`
    };
    return newData
  }
}

module.exports = config