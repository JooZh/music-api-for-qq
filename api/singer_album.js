// 歌手专辑列表
const {getImage} = require('../utils/base');

const options = {
  data:{
    singerAlbum:{
      method: "get_singer_album",
      module: "music.web_singer_info_svr",
      param: {
        singermid: "002J4UUk29y8BY",
        order: "time",
        begin: 0,
        num: 30,
      }
    }
  }    
}
const config = {
  url: '',
  merge: (query,dotProp)=>{
    if(query.singer_mid){
      dotProp.set(options, 'data.singerAlbum.param.singermid', query.singer_mid)
      dotProp.delete(query, 'singer_mid');
    }
    let param = options.data.singerAlbum.param;
    options.data.singerAlbum.param = Object.assign(param, query)
    return options
  },
  handle: (res,picSize) => {
    let data = res.singerAlbum.data
    let newData = {
      total: data.total,
      singer_id: data.singer_id,
      singer_mid: data.singer_mid,
      singer_name: data.singer_name,
      list: []
    };
    data.list.forEach(item => {
      newData.list.push({
        album_id: item.albumid,
        album_mid: item.album_mid,
        album_name: item.album_name,
        album_type: item.albumtype,
        album_pic: getImage(2,picSize,item.album_mid),
        album_desc: item.desc,
        pub_time: item.pub_time,
        listen_num: item.listen_count,
        listen_str: `${(item.listen_count/10000).toFixed(1)}万`,
        attribute5: item.attribute5,
        score: item.score,
        lan: item.lan,
      })
    });
    return newData
  }
}

module.exports = config