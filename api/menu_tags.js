// 歌手关注度
const options = {}
const config = {
  url:'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg',
  merge: (query,dotProp)=>{
    return Object.assign(options,query)
  },
  handle: (res) => {
    let data = res.data
    let newData = {
      all_sorts: data.categories[0].items[0].allsorts.map(sort=>{
        return {
          id: sort.sortId,
          name: sort.sortName
        }
      }),
      tags: data.categories.map(item=>{
        return {
          group: item.categoryGroupName,
          items: item.items.map(value=>{
            return {
              id: value.categoryId,
              name: value.categoryName,
              usable: value.usable
            }
          })
        }
      })
    };
    return newData
  }
}

module.exports = config