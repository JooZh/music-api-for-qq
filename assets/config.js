
const config = {
  uqq: {
    url:'https://u.y.qq.com/cgi-bin/musicu.fcg',
    headers: {
      referer: 'https://u.y.qq.com/',
      host: 'u.y.qq.com',
    },
    options:{
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 0
    }
  },
  
  cqq: {
    url:'',
    headers:{
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com',
    },
    options:{
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 0
    }
  }
}

module.exports = config