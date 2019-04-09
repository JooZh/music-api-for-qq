## 获取歌手列表

#### 全路径

```
http://localhost:8080/music/api/singer_list
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| picSize | 150 | number |  | [150,300,500,800] | 头像尺寸大小 |
| area     | -100   | number | *    | 参考返回的 **tags.area** 属性 | 地区筛选 |
| sex      | -100   | number | *    | 参考返回的 **tags.sex** 属性 | 性别筛选   |
| genre    | -100   | number | *    | 参考返回的 **tags.genre** 属性          | 类别筛选 |
| index    | -100   | number | * | 参考返回的 **tags.index** 属性 | 字母筛选 |
| sin      | 0      | number | * | 规定为每次增加 80 | 开始条数 |
| cur_page | 1      | number | * | 规定为每次增加 1，  **sin** 需要 增加80 | 分页 |

#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    picSize:800,
    area: -100,
    sex: -100,
    genre: -100,
    index: -100,
    sin: 0,
    cur_page: 1
  }  
}).then((response)=>{
  response.data
})
```

#### 返回数据

```js
{
  message: "ok",
  status: 0,
  data:{
    total: 208,                                 //  单曲总数
    tags:{
      area:[{id: -100,name: "全部"},....],      //  区域筛选
      genre:[{id: -100,name: "全部"},....],     //  类别筛选
      index:[{id: -100,name: "全部"},....],     //  字母筛选
      sex:[{id: -100,name: "全部"},....]        //  性别筛选
    }
    list:[
      {
        country: "台湾",                             //  序号
        singer_id: 245,                             //  歌曲总时长
        singer_mid: "0010PLKl2Wgolz",,              //  歌曲格式化时长
        singer_name: "飞儿乐团",                     //  所属专辑 id
        singer_avatar: "http://y.gtimg.cn.jpg"      //  所属专辑 mid
      },
      ......
    ]
  }
}
```

