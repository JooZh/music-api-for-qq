// 新歌首发

const {formatTime} = require('../utils/base')

const options = {
  picSize: 300,
  data:{
    new_song:{
      method: "GetNewSong",
      module: "QQMusic.MusichallServer",
      param: {
        type:2,   // 1 内地。 2 港台  3.欧美 4 日本   5.韩国
        size: 40
      }
    }
  }
}
const config = {
  url: '',
  merge: (query,dotProp)=>{
    if(query.type){
      dotProp.set(options, 'data.new_song.param.type', query.type)
    }
    return options
  },
  handle: (res,picSize) => {
    let data = res.new_song.data
    let newData = {
      total: data.size,
      list:[]
    };
    data.song_list.forEach(item => {
      let album_pic = `http://y.gtimg.cn/music/photo_new/T002R${picSize}x${picSize}M000${item.album.mid}.jpg`
      newData.list.push({
        song_id:item.id,
        song_url:item.url,
        song_name: item.name,
        song_title: item.title,
        song_mid:item.mid,
        album_mid:item.album.mid,
        album_name:item.album.name,
        album_pic:album_pic,
        interval_num:item.interval,
        interval_str: formatTime(item.interval),
        time_public: item.time_public,
        sub_title:item.subtitle,
        singers: item.singer.map(i => {
          return {
            id:i.id,
            mid:i.mid,
            name:i.name
          }
        })
      })
    });
    return res
  }
}

module.exports = config