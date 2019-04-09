const options = {}
const config = {
  url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res) => {
    let data = res.data.slider
    let newData = data.map(item=>{
      return {
        pic:item.picUrl,
        url:item.linkUrl,
      }
    });
    return newData
  }
}

module.exports = config