const {formatTime} = require('../utils/base');

const options = {
  disstid: 6916344291,
  onlysong: 0,
  type: 1,
  picSize:600
}
const config = {
  url:'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res,picSize) => {
    let data = res.cdlist[0]
    let newData = {
      info:{
        diss_name:data.dissname,
        diss_id:data.dissid,
        diss_desc:data.desc,
        diss_pic:data.logo.replace('/300?n=1',`/${picSize}?n=1`),
        nick_name:data.nickname || data.nick,
        tags:data.tags,
        song_num:data.songnum
      },
      song_list:data.songlist.map(item=>{
        return {
          song_id:item.songid,
          song_name: item.songname,
          song_mid:item.songmid,
          album_id:item.albumid,
          album_mid:item.albummid,
          album_name:item.albumname,
          album_desc:item.albumdesc,
          interval_num:item.interval,
          interval_str: formatTime(item.interval),
          mv_mid:item.vid,
          isonly:item.isonly,
          singers: item.singer,
          singer_name: item.singer.map(v=>v.name).join('/')
        }
      }),
      song_ids:data.songids.split(',')
    };
    return newData
  }
}

module.exports = config