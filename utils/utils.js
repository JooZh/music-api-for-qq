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

// 获取对应的配置内容
const getApiConfig = (apiName,res) => {
  if(!apiName){
    return 
  }
  //需要进行容错处理。
  try{
    let context = require(`../api/${apiName}`);
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

const formatTime = (time) =>{
  let m = Math.floor(time/60);
  m = m < 10 ? `0${m}`: m
  let s = time - (m * 60);
  s = s < 10 ? `0${s}`: s
  
  return `${m}:${s}`
}

module.exports = {
  getApiName,
  getApiConfig,
  formatTime
}
