// 歌手关注度
const options = {
  categoryId: 10000000,
  sortId: 5,
  sin: 0, // 开始个数
  ein: 19, // 结束个数
  picSize: 300
}
const config = {
  url:'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res,picSize) => {
    let newData = res.data.list.map(item=>{
      return {
        diss_id:item.dissid,
        diss_name:item.dissname,
        menu_pic:item.imgurl.replace('/600?n=1',`/${picSize}?n=1`),
        commit_time:item.commit_time,
        creator_name:item.creator.name,
        creator_avatar:item.creator.avatarUrl,
        listen_num:item.listennum,
        listen_str:`${(item.listennum/10000).toFixed(1)}万`,
        introduction:item.introduction
      }
    })
    return newData
  }
}

module.exports = config