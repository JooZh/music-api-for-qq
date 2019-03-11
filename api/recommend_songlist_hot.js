// 歌单为你推荐
const options = {
  picSize: 300,
  data:{
    recomPlaylist:{
      method: "get_hot_recommend",
      module: "playlist.HotRecommendServer",
      param: {
        async:1,
        cmd:2   
      }
    }
  }
}
const config = {
  url: '',
  merge: (query,dotProp)=>{
    if (query.picSize) {
      dotProp.set(options, 'picSize', query.picSize)
      dotProp.delete(query, 'picSize');
    }
    return options
  },
  handle: (res,picSize) => {
    let data = res.recomPlaylist.data
    let newData = [];
    data.v_hot.forEach(item => {
      let pic = item.cover;
      if(/album_/.test(pic) && /_albumpic_/.test(pic)){
        pic = pic.replace('album_300',`album_${picSize}`)
        pic = pic.replace('300_albumpic_',`${picSize}_albumpic_`)
      }else{
        pic = `${pic.substr(0,pic.length-7)}${picSize}?n=1`
      }
      newData.push({
        disstid:item.content_id,
        title: item.title,
        pic: pic,
        listen_num: item.listen_num,
        listen_str: `${(item.listen_num/10000).toFixed(1)}万`,
      })
    });
    return newData
  }
}

module.exports = config