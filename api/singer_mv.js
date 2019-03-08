
// 歌手mv 列表
const config = {
  url:'https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg',
  options:{
    singermid: "002J4UUk29y8BY",
    cid: 205360581,
    order: "listen",
    begin: 0,
    num: 20
  },
  handle:(res) => {
    let data = res.data
    let newData = {
      total: data.total,
      list:[]
    };
    data.list.forEach(item => {
      newData.list.push({
        index:item.index,
        score:item.score,
        mv_mid:item.vid,
        mv_id:item.id,
        mv_title:item.title,
        mv_desc:item.desc,
        mv_pic:item.pic,
        singer_id:item.singer_id,
        singer_name:item.singer_name,
        singer_mid:item.singer_mid,
        upload_uin:item.upload_uin,
        upload_nick:item.upload_nick,
        upload_pic:item.upload_pic,
        upload_date:item.date,
        listen_num:item.listenCount,
        listen_str:`${(item.listenCount/10000).toFixed(1)}万`,
      })
    });
    return {
      status:0,
      message:'ok',
      data:newData
    }
  }
} 

module.exports = config