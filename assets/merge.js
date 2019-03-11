
const baseConfig = require('./config')
const dotProp = require('dot-prop')

function merge(query, apiConfig){
  
  let mergeResult = {
    url:'',
    headers:null,
    params:null,
    picSize:150,
    handle:apiConfig.handle
  };
  // 合并传递参数和配置参数
  let mergeQuery = apiConfig.merge(query, dotProp)
  // 自定义了图片的大小
  if(mergeQuery.picSize){
    mergeResult.picSize = mergeQuery.picSize
  }

  if(query.picSize){
    mergeResult.picSize = query.picSize
  }


  // 合并基础配置参数
  if(apiConfig.url){        // cqq
    mergeResult.url = apiConfig.url
    mergeResult.headers = baseConfig.cqq.headers
    mergeResult.params = Object.assign({}, baseConfig.cqq.options, mergeQuery)
  }else{                    // uqq
    mergeResult.url = baseConfig.uqq.url
    mergeResult.headers = baseConfig.uqq.headers
    // 合并其余的参数
    mergeResult.params = Object.assign({}, baseConfig.uqq.options, mergeQuery)
    // 组装data参数 data需要序列化
    if(mergeResult.params.data){
      mergeResult.params.data = JSON.stringify(mergeQuery.data)
    }
  }
  // console.log(mergeResult.params)
  return mergeResult
}

module.exports = merge