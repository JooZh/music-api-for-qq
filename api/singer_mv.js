
// 歌手mv 列表
const config = {
  url:'https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg',
  options:{
    singermid: "002J4UUk29y8BY",
    cid: 205360581,
    order: "listen",
    begin: 0,
    num: 20
  },
  handle:(res) => {
    let data = res.data
    let newData = {
      total: data.total,
      list:[]
    };
    data.list.forEach(item => {
      newData.list.push(item)
    });
    return newData
  }
} 

module.exports = config