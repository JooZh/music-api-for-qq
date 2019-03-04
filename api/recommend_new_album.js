// 新歌首发
const config = {
  url: '',
  options: {
    picSize: 300,
    data:{
      new_album:{
        method: "get_album_by_tags",
        module: "music.web_album_library",
        param: {
          area: 3,    // 参考地区
          company: -1,
          genre: -1,
          type: -1,
          year: -1,
          sort: 2,
          get_tags: 1,
          sin: 0,
          num: 40,
          click_albumid: 0
        }
      }
    }
  },
  handle: (res, picSize) => {
    let data = res.new_album.data
    let newData = {
      total: data.size,
      list: []
    };
    data.list.forEach(item => {
      let album_pic = `http://y.gtimg.cn/music/photo_new/T002R${picSize}x${picSize}M000${item.album_mid}.jpg`
      newData.list.push({
        album_id: item.album_id,
        album_mid: item.album_mid,
        album_name: item.album_name,
        album_pic: album_pic,
        public_time: item.public_time,
        singers: item.singers.map(i => {
          return {
            id:i.singer_id,
            mid:i.singer_mid,
            name:i.singer_name
          }
        })
      })
    });
    return newData
  }
}

module.exports = config