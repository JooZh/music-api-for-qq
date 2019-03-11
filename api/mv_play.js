// 歌手专辑列表
const options = {
  data: {
    getMVUrl: {
      module: "gosrf.Stream.MvUrlProxy",
      method: "GetMvUrls",
      param: {
        vids: ["v00149ipnk5"],
        request_typet: 10001
      }
    }
  }
}
const config = {
  url: '',
  merge: (query,dotProp)=>{
    if(query.mv_mid){
      dotProp.set(options, 'data.getMVUrl.param.vids', [query.mv_mid])
    }
    return options
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
    let newData = {
      f10: play_urls.filter(item=>/\.f10\.mp4/.test(item)),
      f20: play_urls.filter(item=>/\.f20\.mp4/.test(item)),
      f30: play_urls.filter(item=>/\.f30\.mp4/.test(item)),
      f40: play_urls.filter(item=>/\.f40\.mp4/.test(item))
    }
    return newData
  }
}

module.exports = config