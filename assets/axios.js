// 引入库

const axios = require('axios')
// 引入文件
require('../utils/colors')

function request(mergeReslut, apiName, res) {
  // 发送请求
  axios.get(mergeReslut.url, {
    headers: mergeReslut.headers,
    params: mergeReslut.params
  }).then((response) => {
    let resData = {
      status:0,
      message:'ok',
    }
    resData.data = mergeReslut.handle(response.data, mergeReslut.picSize)
    res.json(resData)
    console.log(`[music-api] "${apiName}" 请求成功`.info)
  }).catch((error) => {
    res.json({
      status: 0,
      message:`api: "${apiName}" 请求失败`,
      error:error
    })
    console.log(`[music-api] "${apiName}" 请求失败`.error,error)
  })
}

module.exports = request
