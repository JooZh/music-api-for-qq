require('./colors')
// 获取相对路径
const getApiStr = (url) => {
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
const getConfig = (api,res) => {
  if(!api){
    return 
  }
  //需要进行容错处理。
  try{
    let context = require(`../api/${api}`);
    return context;
  } catch (e){
    res.json({
      status: 0,
      message:`api: "${api}" 不存在`
    })
    console.log(`[music-api] "${api}" 不存在`.warn)
    return null
  }
}

module.exports = {
  getApiStr,
  getConfig
}
