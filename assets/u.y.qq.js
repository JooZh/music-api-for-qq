const u = {
  // 获取歌手专辑
  singerAlbum: {
    method: "get_singer_album",
    param: {
      singermid: "003Nz2So3XXYek",
      order: "time",
      begin: 0,
      num: 30,
      exstatus: 1
    },
    module: "music.web_singer_info_svr"
  },
  // 歌手列表
  singerList: {
    module: "Music.SingerListServer",
    method: "get_singer_list",
    param: {
      area: -100,
      sex: -100,
      genre: -100,
      index: -100,
      sin: 0,
      cur_page: 1
    }
  },
  // 获取 mv 播放地址
  getMvUrl: {
    module: "gosrf.Stream.MvUrlProxy",
    method: "GetMvUrls",
    param: {
      vids: ["012h04mJ2VaqLk"],
      request_typet: 10001
    }
  },
  // 获取 mv 封面地址
  getMvInfo: {
    module: "video.VideoDataServer",
    method: "get_video_info_batch",
    param: {
      vidlist: ["z0027n118z6"],
      required: ["cover_pic"]
    }
  },
  // 获取 其他 mv
  getMvOther: {
    module: "video.VideoLogicServer",
    method: "rec_video_byvid",
    param: {
      vid: "012Ozzup3cVWqn",
      required: [
        "vid",
        "type",
        "sid",
        "cover_pic",
        "duration",
        "singers",
        "video_switch",
        "msg",
        "name",
        "desc",
        "playcnt", 
        "pubdate", 
        "isfav", 
        "gmid", 
        "uploader_headurl", 
        "uploader_nick", 
        "uploader_encuin", 
        "uploader_uin", 
        "uploader_hasfollow", 
        "uploader_follower_num"
      ],
      support: 1
    }
  },
  homeFocusImage: {
    module: "QQMusic.MusichallServer",
    method: "GetFocus",
    param: {}
  }

}

module.exports = u