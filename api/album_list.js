// 歌手专辑列表
const config = {
  url: '',
  options: {
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
          // get_tags: 1,
          sin: 0,
          num: 20,
          // click_albumid: 0
        }
      }
    }
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
          singers:item.singers,

        }
      }),
      tags:tags
    }
    return newData
  }
}

module.exports = config