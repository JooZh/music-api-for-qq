// 引入库
const axios = require('axios')
// 引入文件
const baseConfig = require('./config')
/**
 * @param {} getConfig 读取api 文件夹下配置信息
 * @param {} query 传递的参数对象
 * @param {} res  
 * @param {} api 当前请求的 api 名称
 */
function request(getConfig, query, res, apiName) {

  let url, headers, params, picSize=150;
  // 如果配置了默认的图片大小
  if(getConfig.options.picSize){
    picSize = getConfig.options.picSize
  }
  // 自定义了图片的大小
  if(query.picSize){
    picSize = query.picSize
  }
  // 读取的参数
  let options = getConfig.options
  // 根据 url 是否存在判断请求类型
  if(getConfig.url){  // cqq
    url = getConfig.url
    headers = baseConfig.cqq.headers
    params = Object.assign({}, baseConfig.cqq.options, options, query)
  }else{              // uqq
    url = baseConfig.uqq.url
    headers = baseConfig.uqq.headers
    // 合并url中的 data 参数对象 然后删除 data 对象
    if(query.data){
      let assignNames = Object.keys(query.data)
      assignNames.forEach(name=>{
        Object.assign(options.data[name].param, query.data[name].param)
      })
      delete query.data
    }
    // 合并其余的参数
    params = Object.assign({}, baseConfig.uqq.options, query)
    // 组装data参数 data需要序列化
    params.data = JSON.stringify(options.data)
    // console.log(options.data)
  }
  // console.log(params)
  // 发送请求
  axios.get(url, {
    headers: headers,
    params: params
  }).then((response) => {
    let data = getConfig.handle(response.data,picSize)
    res.json(data)
    console.log(`Api: "${apiName}" 请求成功`)
  }).catch((error) => {
    res.json({
      status: 0,
      message:`Api: "${apiName}" 请求失败`,
      error:error
    })
    console.log(`Api: "${apiName}" 请求失败`)
  })
}

module.exports = request
