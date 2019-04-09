
const options = {}
const config = {
  url:'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res,picSize) => {
    let newData = res.data.hotkey.map(item=>{
      return {
        k:item.k,
        n:item.n,
        s:`${(item.n/10000).toFixed(1)}万`,
      }
    })
    return newData
  }
}

module.exports = config