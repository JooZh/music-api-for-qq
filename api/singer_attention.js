// 歌手关注度
const options = {
  singermid: "002J4UUk29y8BY"
}
const config = {
  url:'https://c.y.qq.com/rsc/fcgi-bin/fcg_order_singer_getnum.fcg',
  merge: (query,dotProp)=>{
    if(query.singer_mid){
      dotProp.set(options, 'singermid', query.singer_mid)
      dotProp.delete(query, 'singer_mid');
    }
    return Object.assign(options,query)
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