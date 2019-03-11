// 歌手专辑列表
const options = {
  data: {
    albumlib: {
      method: "get_album_by_tags",
      module: "music.web_album_library",
      param: {
        area: -1,
        company: -1,
        genre: -1,
        type: -1,
        year: -1,
        sort: 2,
        sin: 0,
        num: 20,
      }
    }
  }
},
const config = {
  url: '',
  merge: (query, dotProp) => {
    Object.keys(query).forEach(key=>{
      query[key] =  Number(query[key])
    })
    let param = options.data.albumlib.param;
    options.data.albumlib.param = Object.assign(param, query)
    return options
  },
  handle: (res,picSize) => {
    let data = res.albumlib.data
    let tagsKeys = Object.keys(data.tags)
    let tags = {}
    tagsKeys.forEach(key => {
      tags[key] = data.tags[key].map(item =>{
        return {
          id: item.id,
          name: item.name
        }
      })
    })
    let newData = {
      total: data.total,
      list: data.list.map(item=>{
        return {
          album_id: item.album_id,
          album_mid: item.album_mid,
          album_name: item.album_name,
          album_pic:`http://y.gtimg.cn/music/photo_new/T002R${picSize}x${picSize}M000${item.album_mid}.jpg`,
          public_time: item.public_time,
          singers:item.singers
        }
      }),
      tags:tags
    }
    return newData
  }
}

module.exports = config