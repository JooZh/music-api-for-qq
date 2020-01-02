const {formatDate,formatTime} = require('../utils/base')
const options = {
  data: {
    mvinfo: {
      module: "video.VideoDataServer",
      method: "get_video_info_batch",
      param: {
        vidlist: ["v00149ipnk5"],
        required: [
          "vid",
          "cover_pic",
          "duration",
          "singers",
          "name",
          "desc",
          "playcnt",
          "pubdate"
        ]
      }
    }
  }
}

const config = {
  url: '',
  merge: (query,dotProp)=>{
    if(query.mv_mid){
      dotProp.set(options, 'data.mvinfo.param.vidlist', [query.mv_mid])
    }
    return options
  },
  handle: (res) => {
    let mvinfo = res.mvinfo.data
    let mvinfokey = Object.keys(mvinfo)[0]
    mvinfo = mvinfo[mvinfokey]
    let newData = {
      mv_title:mvinfo.name,
      mv_pic:mvinfo.cover_pic,
      mv_mid:mvinfo.vid,
      mv_desc:mvinfo.desc,
      interval_num:mvinfo.duration,
      interval_str: formatTime(mvinfo.duration),
      play_num:mvinfo.playcnt,
      play_str:`${(mvinfo.playcnt/10000).toFixed(1)}万`,
      pub_date:formatDate(mvinfo.pubdate),
      singers: mvinfo.singers,
      singer_name: mvinfo.singers.map(v=>v.name).join('/')
    }
    return newData
  }
}

module.exports = config