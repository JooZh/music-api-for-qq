// 新歌首发

const {getImage} = require('../utils/base')

const options = {
  picSize: 300,
  data: {
    new_album:{
      method: "get_album_by_tags",
      module: "music.web_album_library",
      param: {
        area: 3,    // 参考地区
        company: -1,
        genre: -1,
        type: -1,
        year: -1,
        sort: 2,
        sin: 0,
        num: 40,
      }
    }
  }
}

const formatData = (list)=>{
  return list.map(item => {
    return {
      id:item.id,
      name:item.name,
      area:item.area
    }
  })
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

    let param = options.data.new_album.param;
    options.data.new_album.param = Object.assign(param, query)
    return options
  },
  handle: (res, picSize) => {
    let data = res.new_album.data
    
    let newData = {
      total: data.total,
      list: [],
      tags:{
        area:formatData(data.tags.area),
        company:formatData(data.tags.company),
        genre:formatData(data.tags.genre),
        type:formatData(data.tags.type),
        year:formatData(data.tags.year),
      }
    };
    data.list.forEach(item => {
      newData.list.push({
        album_id: item.album_id,
        album_mid: item.album_mid,
        album_name: item.album_name,
        album_pic: getImage(2,picSize,item.album_mid),
        public_time: item.public_time,
        singers: item.singers.map(i => {
          return {
            id:i.singer_id,
            mid:i.singer_mid,
            name:i.singer_name
          }
        })
      })
    });
    return newData
  }
}

module.exports = config