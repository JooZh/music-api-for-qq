// 歌单为你推荐
const config = {
  url: '',
  options: {
    data:{
      playlist:{
        method: "get_playlist_by_category",
        module: "playlist.PlayListPlazaServer",
        picSize: 300,
        param: {
          id: 64,
          curPage: 1,
          size: 20,
          order: 5,
          titleid: 64
        }
      }
    }    
  },
  handle: (res,picSize) => {
    let data = res.playlist.data
    let newData = [];
    data.v_playlist.forEach(item => {
      newData.push({
        disstid: item.tid,
        title: item.title,
        pic:`${item.cover_url_big.substr(0,item.cover_url_big.length-7)}${picSize}?n=1`,
        listen_num: item.access_num,
        listen_str: `${(item.access_num/10000).toFixed(1)}万`,
      })
    });
    return newData
  }
}

module.exports = config