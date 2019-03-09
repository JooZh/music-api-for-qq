
// 排行榜列表
const config = {
  url:'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
  merge: (query, dotProp)=>{
    return {
      platform: "h5"
    }
  },
  handle:(res,picSize) => {
    let data = res.data
    let newData = [];
    data.topList.forEach(item => {
      newData.push({
        id:item.id,
        top_pic:item.picUrl,
        top_title:item.topTitle,
        listen_num:item.listenCount,
        listen_str: `${(item.listenCount/10000).toFixed(1)}万`,
        song_list:item.songList.map(i=>{
          return{
            song_name:i.songname,
            singer_name:i.singername
          }
        })
      })
    });
    return newData
  }
} 

module.exports = config