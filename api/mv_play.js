// 歌手专辑列表
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
    let newData = {
      recommend_url:play_urls[2],
      play_urls:play_urls
    }
    return newData
  }
}

module.exports = config