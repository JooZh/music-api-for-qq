const {formatDate,formatTime} = require('../utils/base')
const options = {
  data: {
    "mv_tag":{
      "module":"MvService.MvInfoProServer",
      "method":"GetAllocTag",
      "param":{}
    },
    "mv_list":{
      "module":"MvService.MvInfoProServer",
      "method":"GetAllocMvInfo",
      "param":{
        "start":0,
        "size":20,
        "version_id":7,
        "area_id":15,
        "order":0   // 0最热  1 最新
      }
    }
  }
}

const config = {
  url: '',
  merge: (query,dotProp)=>{
    Object.keys(query).forEach(key=>{
      query[key] =  Number(query[key])
    })
    let param = options.data.mv_list.param;
    options.data.mv_list.param = Object.assign(param, query)
    return options
  },
  handle: (res) => {
    let data = res
    let newData = {
      total:data.mv_list.data.total,
      mv_list:data.mv_list.data.list.map(item=>{
        return {
          mv_title: item.title,
          mv_pic: item.picurl,
          mv_mid: item.vid,
          singer_name: item.singers.map(item=>item.name).join('/'),
          singers: item.singers,
          play_num: item.playcnt,
          play_str: `${(item.playcnt/10000).toFixed(1)}万`,
          pub_date: formatDate(item.pubdate)
        }
      }),
      mv_tags:{
        area:data.mv_tag.data.area,
        version:data.mv_tag.data.version
      }
    }
    return newData
  }
}

module.exports = config