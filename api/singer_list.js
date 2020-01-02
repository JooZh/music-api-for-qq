// 歌手列表
const {getImage} = require('../utils/base');

const options = {
  picSize: 800,
  data: {
    "singerList": {
      "module": "Music.SingerListServer",
      "method": "get_singer_list",
      "param": {
        "area": -100,
        "sex": -100,
        "genre": -100,
        "index": -100,
        "sin": 0,
        "cur_page": 1
      }
    }
  }
}
const config = {
  url: '',
  merge: (query, dotProp) => {
    if (query.picSize) {
      dotProp.set(options, 'picSize', query.picSize)
      dotProp.delete(query, 'picSize');
    }
    Object.keys(query).forEach(key=>{
      query[key] =  Number(query[key])
    })

    let param = options.data.singerList.param;
    options.data.singerList.param = Object.assign(param, query)
    return options
  },
  handle: (res, picSize) => {
    let data = res.singerList.data
    let newData = {
      total: data.total,
      tags: data.tags,
      list: [],
    };
    data.singerlist.forEach(item => {
      newData.list.push({
        country: item.country,
        singer_id: item.singer_id,
        singer_mid: item.singer_mid,
        singer_name: item.singer_name,
        singer_avatar: getImage(1,picSize,item.singer_mid)
      })
    });
    return newData
  }
}

module.exports = config