// 歌手专辑列表
const config = {
  url: '',
  options: {
    data:{
      singerAlbum:{
        method: "get_singer_album",
        module: "music.web_singer_info_svr",
        param: {
          singermid: "003Nz2So3XXYek",
          order: "time",
          begin: 0,
          num: 30,
          exstatus: 1
        }
      }
    }    
  },
  handle: (res,picSize) => {
    let data = res.singerAlbum.data
    let newData = {
      total: data.total,
      singer_id: data.singer_id,
      singer_mid: data.singer_mid,
      singer_name: data.singer_name,
      list:[]
    };
    data.list.forEach(item => {
      let album_pic = `http://y.gtimg.cn/music/photo_new/T002R${picSize}x${picSize}M000${item.album_mid}.jpg`
      newData.list.push({
        album_id: item.albumid,
        album_mid: item.album_mid,
        album_name: item.album_name,
        album_type: item.albumtype,
        album_pic: album_pic,
        album_desc:item.desc,
        pub_time: item.pub_time,
        listen_count: item.listen_count,
        attribute5: item.attribute5,
        score:item.score,
        lan: item.lan,
      })
    });
    return newData
  }
}

module.exports = config