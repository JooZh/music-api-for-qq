// 歌手专辑列表
const formDate = require('../utils/date')
const config = {
  url: '',
  options: {
    data: {
      getMVUrl: {
        module: "gosrf.Stream.MvUrlProxy",
        method: "GetMvUrls",
        param: {
          vids: ["v00149ipnk5"],
          request_typet: 10001
        }
      },
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
      },
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
    let mvurls = res.getMVUrl.data
    let mvurlskey = Object.keys(mvurls)[0]
    let mp4_urls = mvurls[mvurlskey].mp4.map(item => item.freeflow_url)
    let hls_urls = mvurls[mvurlskey].hls.map(item => item.freeflow_url)
    let urls = mp4_urls.concat(hls_urls)
    let play_urls = []
    urls.forEach(url => {
      url.forEach(i =>{
        play_urls.push(i)
      })
    });

    let mvinfo = res.mvinfo.data
    let mvinfokey = Object.keys(mvinfo)[0]
    mvinfo = mvinfo[mvinfokey]

    let other_list = res.other.data.list
    let newData = {
      recommend_url:play_urls[2],
      play_urls:play_urls,
      mv_info:{
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
      },
      other_list: other_list.map(item=>{
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
          uploader_nick:item.uploader_nick,
        }
      })
    }
    return newData
  }
}

module.exports = config