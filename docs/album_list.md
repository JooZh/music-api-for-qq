## 获取歌单列表

#### 全路径:

```
http://localhost:8080/music/api/album_list
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| picSize | 150 | number |  | [150,300,500,800] | 图片大小 |
| area     | -1   | number | *    | 参考返回的 **tags.area** 属性 | 筛选 |
| company      | -1   | number | *    | 参考返回的 **tags.company** 属性 | 筛选   |
| genre    | -1   | number | *    | 参考返回的 **tags.genre** 属性          | 筛选 |
| type    | -1   | number | * | 参考返回的 **tags.type** 属性 | 筛选 |
| year      | 0      | number | * | 参考返回的 **tags.year** 属性 | 筛选 |
| sort | 2     | number | * | ['2','5'] | 排序方式 最热是5 最新是2 |
| sin | 1      | number | * | 无 | 开始加载的位置 |
| num | 20    | number | * | 无 | 每次加载多少数量 |


#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    data: {
      albumlib: {
        area: -1,
        company: -1,
        genre: -1,
        type: -1,
        year: -1,
        sort: 2,
        sin: 0,
        num: 20,
      }
    }
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
      area:[{id: -1,name: "全部"},....],      //  区域筛选
      genre:[{id: -1,name: "全部"},....],     //  类别筛选
      company:[{id: -1,name: "全部"},....],     //  字母筛选
      type:[{id: -1,name: "全部"},....]        //  性别筛选
      .....
    }
    list:[
      {
        album_id: 6357246,
        album_mid: "002QPcIj3IuLEH",
        album_name: "说再见就好",
        album_pic: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002QPcIj3IuLEH.jpg",
        public_time: "2019-03-08",
        singers: [
          {
            singer_id: 89698,
            singer_mid: "003Cn3Yh16q1MO",
            singer_name: "庄心妍"
          },
          ......
        ]
      },
      ......
    ]
  }
}
```

