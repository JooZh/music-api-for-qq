// 歌单为你推荐
const config = {
  url: '',
  options: {
    data:{
      recomPlaylist:{
        method: "get_hot_recommend",
        module: "playlist.HotRecommendServer",
        picSize: 600,
        param: {
          async:1,
          cmd:2   
        }
      }
    }
  },
  handle: (res,picSize) => {
    let data = res.recomPlaylist.data
    let newData = [];
    data.v_hot.forEach(item => {
      newData.push({
        disstid:item.content_id,
        title: item.title,
        pic: `${item.cover.substr(0,item.cover.length-7)}${picSize}?n=1`,
        listen_num: item.listen_num,
        listen_str: `${(item.listen_num/10000).toFixed(1)}万`,
      })
    });
    return newData
  }
}

module.exports = config