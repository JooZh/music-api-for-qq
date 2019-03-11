// 相似歌手列表
const options = {
  singer_mid: "0025NhlN2yWrP4",
  start: 0,
  num: 30,
  utf8: 1,
  picSize: 300
}

const config = {
  url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_simsinger.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res, picSize) => {
    let data = res.singers
    let newData = {
      list: []
    };
    data.items.forEach(item => {
      let singer_avatar = item.pic.replace('mid_singer_150',`mid_singer_${picSize}`)
      newData.list.push({
        singer_id: item.id,
        singer_mid: item.mid,
        singer_name: item.name,
        singer_avatar: singer_avatar
      })
    });
    return newData
  }
}

module.exports = config