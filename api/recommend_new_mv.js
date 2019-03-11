
// 推荐 mv 列表
const options = {
  cmd: "shoubo",
  lan: "all"
}
const config = {
  url:'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag',
  merge: (query, dotProp)=>{
    return Object.assign(options,query)
  },
  handle:(res) => {
    let data = res.data
    let newData = [];
    data.mvlist.forEach(item => {
      newData.push({
        mv_id: item.mv_id,
        mv_mid:item.vid,
        mv_desc: item.mvdesc,
        mv_score: item.mvscore,
        mv_title: item.mvtitle,
        mv_pic: item.picurl,
        pub_date: item.pub_date,
        listen_num:item.listennum,
        listen_str: `${(item.listennum/10000).toFixed(1)}万`,
        singers: item.singers
      })
    });
    return newData
  }
} 

module.exports = config