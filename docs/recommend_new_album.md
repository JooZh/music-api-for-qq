## 获取歌手列表

#### 全路径

```
http://localhost:8080/music/api/recommend_new_album
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| picSize | 150 | number |  | [150,300,500,800] | 头像尺寸大小 |
| area     | 1  | number | *    | 参考返回的 **tags.area** 属性 | 地区筛选 |
| company | 1  | number | *    | 参考返回的 **tags.sex** 属性 | 公司筛选 |
| genre    | 1  | number | *    | 参考返回的 **tags.genre** 属性          | 性别筛选 |
| type    | 1  | number | * | 参考返回的 **tags.type** 属性 | 字母筛选 |
| year    | 1  | number | * | 参考返回的 **tags.year** 属性 | 年份筛选 |
| sort    | 1  | number | * | 无 | 排序方式 |
| sin      | 0      | number | * |  | 开始条数 |
| num | 40      | number | * | 每次返回的个数 | 分页 |

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    picSize:800,
    area: 3,    
    company: -1,
    genre: -1,
    type: -1,
    year: -1,
    sort: 2,
    sin: 0,
    num: 40,
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
      area:[{id: 1,name: "全部"},....],      //  区域筛选
      genre:[{id: 1,name: "全部"},....],     //  类别筛选
      index:[{id: 1,name: "全部"},....],     //  字母筛选
      sex:[{id: 1,name: "全部"},....]        //  性别筛选
    }
    list:[
      {
        "album_id": 6360039,
        "album_mid": "000E6sWv0E4M9l",
        "album_name": "Pushing 20",
        "album_pic": "http://y.gtimg.cn/music/photo_new/T002R150x150M000000E6sWv0E4M9l.jpg",
        "public_time": "2019-03-08",
        "singers": [
          {
            "id": 175732,
            "mid": "001b86502oTUai",
            "name": "Sabrina Carpenter"
          },
          .....
        ]
      },
      ......
    ]
  }
}
```

