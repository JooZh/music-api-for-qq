// 新歌首发

const {formatTime,getImage} = require('../utils/base')

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
      newData.list.push({
        song_id:item.id,
        song_url:item.url,
        song_name: item.name,
        song_title: item.title,
        song_mid:item.mid,
        album_mid:item.album.mid,
        album_name:item.album.name,
        album_pic: getImage(2,picSize,item.album.mid),
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
    return newData
  }
}

module.exports = config