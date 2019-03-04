
// 排行榜列表
const config = {
  url:'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
  options:{
    platform: "h5"
  },
  handle:(res) => {
    let data = res.data
    let newData = [];
    data.topList.forEach(item => {
      newData.push({
        id:item.id,
        listen_num:item.listenCount,
        listen_str: `${(item.listenCount/10000).toFixed(1)}万`,
        top_title:item.topTitle,
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