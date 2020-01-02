
const {formatTime, getImage} = require('../utils/base')
const options = {
  'ct': 24,
  'singermid': '002J4UUk29y8BY',
  'order': 'listen',
  'begin': 0,
  'num': 30,
  'songstatus': 1
}
// 歌手歌曲列表
const config = {
  url:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
  merge: (query,dotProp)=>{
    if(query.singer_mid){
      dotProp.set(options, 'singermid', query.singer_mid);
      dotProp.delete(query, 'singer_mid');
    }
    return Object.assign(options,query)
  },
  handle:(res) => {
    let data = res.data
    let newData = {
      singer_id: data.singer_id,
      singer_mid: data.singer_mid,
      singer_name: data.singer_name,
      singer_avatar: getImage(1, picSize, data.singer_mid),
      total: data.total,
      list:[]
    };
    data.list.forEach(item => {
      newData.list.push({
        index: item.index,
        interval_num: item.musicData.interval,
        interval_str: formatTime(item.musicData.interval),
        album_id: item.musicData.albumid,
        album_mid: item.musicData.albummid,
        album_desc: item.musicData.albumdesc,
        album_name: item.musicData.albumname,
        song_id: item.musicData.songid,
        song_mid: item.musicData.songmid,
        song_name: item.musicData.songname,
        song_orig: item.musicData.songorig,
        song_type: item.musicData.songtype,
        mv_mid: item.musicData.vid
      })
    });
    
    return newData
  }
} 

module.exports = config