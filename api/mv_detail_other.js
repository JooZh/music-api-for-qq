// 歌手专辑列表
const {formatDate,formatTime} = require('../utils/base')

const options = {
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
}

const config = {
  url: '',
  merge: (query,dotProp)=>{
    if(query.mv_mid){
      dotProp.set(options, 'data.other.param.vid', query.mv_mid)
    }
    return options
  },
  handle: (res) => {
    let other_list = res.other.data.list
    let newData = other_list.map(item => {
      return {
        mv_title:item.name,
        mv_pic:item.cover_pic,
        mv_mid:item.vid,
        mv_desc:item.desc,
        interval_num:item.duration,
        interval_str: formatTime(item.duration),
        play_num:item.playcnt,
        play_str:`${(item.playcnt/10000).toFixed(1)}万`,
        pub_date:formatDate(item.pubdate),
        uploader_nick:item.uploader_nick
      }
    })
    return newData
  }
}

module.exports = config