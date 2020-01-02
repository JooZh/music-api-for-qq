## 获取MV列表和标签

#### 全路径

```
http://localhost:8080/music/api/mv_list
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| start | 0 | number | * | 数字 | 开始取值 |
| size | 20  | number | *    | 数字 | 返回个数 |
| version_id | 7   | number | *    | 参考返回的 **mv_tags.version** 属性 | 筛选   |
| area_id | 15 | number | *    | 参考返回的 **mv_tags.area** 属性 | 筛选 |
| order | 0 | number | * | 0 ，1 | 筛选 |


#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    "start":0,
    "size":20,
    "version_id":7,
    "area_id":15,
    "order":0   // 0最热  1 最新
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
    mv_tags:{
      area:[{id: -1,name: "全部"},....],      //  区域筛选
      version:[{id: -1,name: "全部"},....],     //  类别筛选
    }
    mv_list:[
      {
        "mv_title": "Kill This Love",
        "mv_pic": "http://y.gtimg.cn/music/photo_new/T015R640x360M1010003x77W1X0FA3.jpg",
        "mv_mid": "l0030x5i9ek",
        "singers": "BLACKPINK",
        "play_num": 2109185,
        "play_str": "210.9万",
        "pub_date": "2019-04-04"
      },
      ......
    ]
  }
}
```

