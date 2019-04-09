// 新歌首发
const options = {
  data: {
    "focus":{
      "module":"QQMusic.MusichallServer",
      "method":"GetFocus",
      "param":{}
    }
  }
}

const config = {
  url: '',
  merge: (query, dotProp) => {
    let param = options.data.focus.param;
    options.data.focus.param = Object.assign(param, query)
    return options
  },
  handle: (res) => {
    let data = res.focus.data.content
    let newData = data.map(item => {
      return item.pic_info.url
    })
    return newData
  }
}

module.exports = config