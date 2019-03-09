// 歌手专辑列表
const config = {
  url: '',
  options: {
    data: {
      "songinfo": {
        "module": "music.pf_song_detail_svr",
        "method": "get_song_detail_yqq",
        "param": {
          "song_type": 0,
          "song_mid": "002E3MtF0IAMMY",
          "song_id": 200255722
        },
      },
      "mv": {
        "module": "MvService.MvInfoProServer",
        "method": "GetMvBySongid",
        "param": {
          "mids": ["002E3MtF0IAMMY"]
        }
      },
      "song_gedan": {
        "module": "music.mb_gedan_recommend_svr",
        "method": "get_related_gedan",
        "param": {
          "song_id": 200255722,
          "song_type": 1,
          "sin": 0,
          "last_id": 0
        }
      }
    }
  },
  handle: (res,picSize) => {
    let song_mv = []
    let mvdata = res.mv.data.mvinfo
    let mvkeys = Object.keys(mvdata)
    mvkeys.forEach(key=>{
      song_mv.push({
        mv_id:mvdata[key].mvid,
        mv_mid:mvdata[key].vid,
        mv_pic:mvdata[key].picurl,
        mv_title:mvdata[key].title,
        singers: mvdata[key].singers.map(v=>{
          return {
            id: v.id,
            mid: v.mid,
            name: v.name
          }
        })
      })
    });

    let song_gedan = res.song_gedan.data.vec_gedan.map(v=>{
      return {
        tid: v.tid,
        listen_num: v.listen_num,
        listen_str: `${(v.listen_num/10000).toFixed(1)}万`,
        imgurl: v.imgurl,
        dissname: v.dissname,
        creator: v.creator,
        song_num: v.song_num
      }
    });

    let track_info = res.songinfo.data.track_info
    let track = {
      title:track_info.title,
      subtitle:track_info.subtitle,
      time_public:track_info.time_public,
      album_id: track_info.album.id,
      album_mid: track_info.album.mid,
      album_name: track_info.album.name,
      album_pic: `http://y.gtimg.cn/music/photo_new/T002R${picSize}x${picSize}M000${track_info.album.mid}.jpg`,
      singers:track_info.singer.map(v=>{
        return {
          id:v.id,
          mid:v.mid,
          title: v.title,
          name: v.name,
        }
      })
    };

    let labels = {}
    let songinfo = res.songinfo.data.info
    let songinfokeys = Object.keys(songinfo)
    songinfokeys.forEach(key=>{
      labels[key] = {
        title:songinfo[key].title,
        content:songinfo[key].content.map(v => {
          return {
            id: v.id,
            mid: v.mid,
            value: v.value,
            jumpurl: v.jumpurl,
          }
        })
      }
    });

    let newData = {
      song_mv:song_mv,
      song_gedan:song_gedan,
      song_track:{
        track:track,
        lables:labels
      }
    };
    // return res
    return newData
  }
}

module.exports = config