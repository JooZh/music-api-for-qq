// 相似歌手列表
const config = {
  url: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg',
  options: {
    singermid: '0025NhlN2yWrP4',
    utf8: 1,
    format: 'xml'
  },
  handle: (res) => {
    let data = res;
    let dataJson = {
      desc:[],
      basic:[],
      other:[]
    };
    // 去除杂质
    data = data.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>','')
    data = data.replace(/<!\[CDATA\[/g,'')
    data = data.replace(/]]>/g,'')
    // 取出 desc
    dataJson.desc = data.match(/<desc>([\s\S]*?)<\/desc>/)[1].split('\n')
    // 取出 basic
    let basicItem = data.match(/<basic>([\s\S]*?)<\/basic>/)[1].match(/<item>([\s\S]*?)<\/item>/g)
    basicItem.forEach(item => {
      dataJson.basic.push({
        key:item.match(/<key>([\s\S]*?)<\/key>/)[1],
        value:item.match(/<value>([\s\S]*?)<\/value>/)[1].split('、'),
      })
    });
    // 取出 other
    let otherItem = data.match(/<other>([\s\S]*?)<\/other>/)[1].match(/<item>([\s\S]*?)<\/item>/g)
    otherItem.forEach(item => {
      let values = item.match(/<value>([\s\S]*?)<\/value>/)[1].split('\n')
      values = values.map(item=>item.replace(/^\s+|\s+$/gm,''))
      values = values.map(item=>item.replace(/\s+/g,'   '))
      dataJson.other.push({
        key:item.match(/<key>([\s\S]*?)<\/key>/)[1],
        value:values
      })
    });
    return {
      status:0,
      message:'ok',
      data:dataJson
    }
  } 
}

module.exports = config