// 歌手专辑列表
const options = {
  data:{
    req: {
      module: "CDN.SrfCdnDispatchServer",
      method: "GetCdnDispatch",
      param: {
        guid: "9449044610",
        calltype: 0,
        userip: ""
      }
    },
    req_0: {
      module: "vkey.GetVkeyServer",
      method: "CgiGetVkey",
      param: {
        guid: "9449044610",
        songmid: ["003jjoM94WLiTf"],
        songtype: [0],
        uin: "0",
        loginflag: 1,
        platform: "20"
      }
    },
    comm: {
      uin: 0,
      format: "json",
      ct: 24,
      cv: 0
    }
  }
}
const config = {
  url: '',
  merge: (query,dotProp)=>{
    if(query.song_mid){
      dotProp.set(options, 'data.req_0.param.songmid', [query.song_mid])
    }
    if(query.guid){
      dotProp.set(options, 'data.req.param.guid', query.guid)
      dotProp.set(options, 'data.req_0.param.guid', query.guid)
    }
    return options
  },
  handle: (res) => {
    let hosts = res.req.data.sip
    let link = res.req_0.data.midurlinfo[0].purl;
    let urls = hosts.map(host => host+link)
    let newData = {
      user_ip:res.req.data.userip,
      recommend_url:urls[2],
      play_urls:urls
    }
    return res
  }
}

module.exports = config