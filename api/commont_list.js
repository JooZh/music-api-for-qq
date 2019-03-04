
// 歌手mv 列表
const formDate = require('../utils/date')
const config = {
  url:'https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg',
  options:{
    reqtype: 2,
    biztype: 5,
    topid: "v00149ipnk5",  // mv_mid     album_id   song_id
    cmd: 8, 
    pagenum: 0,
    pagesize: 25,
  },
  handle:(res) => {
    let newComment = res.comment
    let hotComment = res.hot_comment
    let newData = {
      hot_comment:{
        total: hotComment.commenttotal,
        list:hotComment.commentlist.map(item=>{
          return {
            nick:item.nick,
            time: formDate(item.time),
            avatar: item.avatarurl,
            praisenum: item.praisenum,
            content: item.rootcommentcontent,
            reply: item.middlecommentcontent ? item.middlecommentcontent.map(item=>{
              return {
                replyednick: item.replyednick,
                replynick: item.replynick,
                replycontent: item.subcommentcontent,
              }
            }): null,
          }
        })
      },
      new_comment:{
        total: newComment.commenttotal,
        list: newComment.commentlist.map(item=>{
          return {
            nick:item.nick,
            time: formDate(item.time),
            avatar: item.avatarurl,
            praisenum: item.praisenum,
            content: item.rootcommentcontent,
            reply: item.middlecommentcontent ? item.middlecommentcontent.map(item=>{
              return {
                replyednick: item.replyednick,
                replynick: item.replynick,
                replycontent: item.subcommentcontent,
              }
            }):null,
          }
        })
      },
    };

    return newData
  }
} 

module.exports = config