const options = {
  cmd: "pc_index_new"
}
const config = {
  url:'https://c.y.qq.com/v8/fcg-bin/musicmall.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res) => {
    let data = res.data.banner
    let newData = data.map(item=>{
      return {
        pic:item.picurl,
        url:item.jumpurl
      }
    });
    return newData
  }
}

module.exports = config