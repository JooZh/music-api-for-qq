const {formatTime} = require('../utils/base');
const options = {
  platform: "h5",
  type: "top",
  topid: 26
}
// 排行榜详情
const config = {
  url:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
  merge: (query,dotProp)=>{
    if(query.top_id){
      dotProp.set(options, 'topid', query.top_id)
      dotProp.delete(query, 'top_id');
    }
    return Object.assign(options,query)
  },
  handle:(res) => {
    let data = res
    let newData = {
      total:data.total_song_num,
      list_name:data.topinfo.ListName,
      list_info:data.topinfo.info,
      listen_num:data.topinfo.listennum,
      listen_str: `${(data.topinfo.listennum/10000).toFixed(1)}万`,
      update_time: data.update_time,
      week: data.date.substr(5),
      song_list:[],
    };
    data.songlist.forEach(item => {
      newData.song_list.push({
        song_id: item.data.songid,
        song_mid: item.data.songmid,
        song_name: item.data.songname,
        album_id: item.data.albumid,
        album_mid: item.data.albummid,
        album_name: item.data.albumname,
        album_desc: item.data.albumdesc,
        mv_mid: item.data.vid,
        interval_num: item.data.interval,
        interval_str: formatTime(item.data.interval),
        is_pay: item.data.pay.payplay,
        singers: item.data.singer,
      })
    });
    
    return newData
  }
} 

module.exports = config