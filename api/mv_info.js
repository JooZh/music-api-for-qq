const formDate = require('../utils/date')
const config = {
  url: '',
  options: {
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
  },
  handle: (res) => {
    let mvinfo = res.mvinfo.data
    let mvinfokey = Object.keys(mvinfo)[0]
    mvinfo = mvinfo[mvinfokey]
    let newData = {
      mv_name:mvinfo.name,
      mv_pic:mvinfo.cover_pic,
      mv_mid:mvinfo.vid,
      mv_desc:mvinfo.desc,
      interval_num:mvinfo.duration,
      interval_str: `0${(mvinfo.duration/60).toFixed(2)}`,
      play_num:mvinfo.playcnt,
      play_str:`${(mvinfo.playcnt/10000).toFixed(1)}万`,
      pub_date:formDate(mvinfo.pubdate),
      singers: mvinfo.singers.map(item=>item.name).join('/')
    }
    return newData
  }
}

module.exports = config