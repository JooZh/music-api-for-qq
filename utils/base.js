require('./colors')
// 获取相对路径
const getApiName = (url) => {
  let api = ''
  if(url.indexOf('?') !== -1){
    let router = url.split('?')[0];
    api = router.split('/')[2];
  }else{
    api = url.split('/')[2];
  }
  return api
}

// 获取对应的 api 配置项
const getApiConfig = (apiName,res) => {
  if(!apiName){
    return 
  }
  //需要进行容错处理。
  try{
    let context = require(`../api/${apiName}.js`);
    return context;
  } catch (e){
    res.json({
      status: 0,
      message:`api: "${apiName}" 不存在`
    })
    console.log(`[music-api] "${apiName}" 不存在`.warn)
    return null
  }
}

// 格式化播放时间
const formatTime = (time) =>{
  let m = Math.floor(time/60);
  m = m < 10 ? `0${m}`: m
  let s = time - (m * 60);
  s = s < 10 ? `0${s}`: s
  
  return `${m}:${s}`
}

// 格式化日期
const formatDate = (date) => {
  if(!date){
    data = new Date()
  }else{
    data = new Date(date * 1000)
  }
  let year = data.getFullYear()
  let month = data.getMonth() + 1
  let day = data.getDate()
  let hour = data.getHours()
  let minutes = data.getMinutes()
  let seconds = data.getSeconds()
  function ad0 (n){
    let s = n < 10 ? `0${n}`: n
    return s
  }
  return `${year}-${ad0(month)}-${ad0(day)}`
}

const getImage = (type,size,id) =>{
  return `http://y.gtimg.cn/music/photo_new/T00${type}R${size}x${size}M000${id}.jpg`
}

module.exports = {
  getApiName,
  getApiConfig,
  formatTime,
  formatDate,
  getImage
}
