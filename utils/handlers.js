const base64 = require('js-base64').Base64
const Lyric = require('./lyric')

// 处理返回的数据
const handlers = {
  // 歌手列表
  singerList(resp) {
    return resp.singerList.data
  },
  // 歌手信息和 单曲
  singerDetail(resp) {
    return resp.data
  },
  // 歌手专辑
  singerAlbum(resp) {
    return resp.singerAlbum.data
  },
  // 歌手mv
  singerMv(resp) {
    return resp.data
  },
  // 组装歌曲播放连接
  songPlayUrl(resp) {
    let link = 'https://dl.stream.qqmusic.qq.com';
    let param = {
      guid: 9449044610,
      fromtag: 66,
      uin: 0,
    }
    let strArr = [];
    for (let i in param) {
      strArr.push(`${i}=${param[i]}`);
    }
    let str = `${link}/${resp.data.items[0].filename}?vkey=${resp.data.items[0].vkey}&${strArr.join('&')}`;
    return {
      url: str
    }
  },
  // 歌词的数据处理
  songLyric(resp) {
    let lyric = {};
    if (typeof resp === 'string') {
      let reg = /^\w+\(({[^()]+})\)$/
      let matches = resp.match(reg)
      if (matches) {
        lyric = new Lyric({
          lyricStr: base64.decode(JSON.parse(matches[1]).lyric), // 歌词字符串
          lateTime: -800, //歌词延迟
        })
        return lyric
      }
    }
  },
  // 播放 mv 的链接处理
  getMvUrl(resp) {
    let data = resp.getMvUrl.data;
    let mp4Arr = [];
    let hlsArr = [];
    for (let i in data) {
      mp4Arr = data[i]['mp4'];
      hlsArr = data[i]['hls'];
    }
    let url;
    mp4Arr.forEach((item) => {
      if (item.comm_url.length) {
        url = item.comm_url[0]
      } else if (item.freeflow_url.length) {
        url = item.freeflow_url[0]
      }
    })
    if (!url) {
      hlsArr.forEach((item) => {
        if (item.comm_url.length) {
          url = item.comm_url[0]
        } else if (item.freeflow_url.length) {
          url = item.freeflow_url[0]
        }
      })
    }
    return {
      url: url
    }
  },
  // mv评论
  mvComment(resp) {
    return resp.comment.commentlist
  },
  //mv封面 的链接处理
  getMvInfo(resp) {
    let data = resp.getMvInfo.data;
    let url;
    for (let i in data) {
      url = data[i]['cover_pic'];
    }
    return {
      url: url
    }
  },
  //mv播放器下其他播放列表
  getMvOther(resp) {
    return resp.getMvOther.data.list
  },
  // 专辑详情信息
  albumInfo(resp){
    let songlist = resp.data.list
    delete resp.data.list
    return {
      songlist:songlist,
      topInfo:resp.data
    }
  },
  // 手机端排行榜
  topList(resp){
    return resp.data.topList
  },
   // 手机端排行榜详情
  topListDetail(resp){
    return {
      songlist:resp.songlist,
      topInfo:{
        ListName:resp.topinfo.ListName,
        pic_album:resp.topinfo.pic_album,
        topID:resp.topinfo.topID,
        update_time:resp.update_time,
        total_song_num:resp.total_song_num,
        day_of_year:resp.day_of_year,
        date:resp.date
      }
    }
  },
  // 歌单列表
  songMenuList(resp){
    return resp.data.list
  },
  // 歌单标签
  songMenuTags(resp){
    return resp.data.categories
  },
  // 歌单详情
  songMenuDetail(resp){
    // return resp.cdlist[0]
    let cdlist = resp.cdlist[0]
    return {
      topInfo:{
        songnum:cdlist.songnum,
        dissname:cdlist.dissname,
        visitnum:cdlist.visitnum,
        logo:cdlist.logo,
        nickname: cdlist.nickname?cdlist.nickname:cdlist.nick,
      },
      songlist:cdlist.songlist,
    }
  },
  // 首页mv
  homeMvList(resp){
    return resp.data.mvlist
  },
  // 首页焦点图
  homeFocusImage(resp){
    let data = resp.homeFocusImage.data.content;
    let arr = []
    data.forEach((item)=>{
      arr.push(item.pic_info.url)
    })
    return arr
  }
  
}

module.exports = handlers