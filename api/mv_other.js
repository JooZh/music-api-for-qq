// 歌手专辑列表
const formDate = require('../utils/date')
const config = {
  url: '',
  options: {
    data: {
      other: {
        module: "video.VideoLogicServer",
        method: "rec_video_byvid",
        param: {
          vid: "v00149ipnk5",
          required: [
            "vid", 
            "cover_pic", 
            "duration",  
            "name", 
            "desc", 
            "playcnt", 
            "pubdate",  
            "uploader_nick",  
          ],
          support: 1
        }
      }
    }
  },
  handle: (res) => {
    let other_list = res.other.data.list
    let newData = other_list.map(item => {
      return {
        mv_name:item.name,
        mv_pic:item.cover_pic,
        mv_mid:item.vid,
        mv_desc:item.desc,
        interval_num:item.duration,
        interval_str: `0${(item.duration/60).toFixed(2)}`,
        play_num:item.playcnt,
        play_str:`${(item.playcnt/10000).toFixed(1)}万`,
        pub_date:formDate(item.pubdate),
        uploader_nick:item.uploader_nick
      }
    })
    return newData
  }
}

module.exports = config