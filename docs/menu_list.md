## 获取分类歌单列表

#### 全路径

```
http://localhost:8080/music/api/menu_list
```

#### 前置条件

> 无
>

#### 参数说明

| 参数名   | 默认值 | 类型   | 必填 | 可选参数                          | 说明               |
| :------- | ------ | ------ | ---- | --------------------------------- | ------------------ |
| categoryId | 10000 | number | * | 参考返回 | 分类 |
| sortId | 5 | number | *    | 参考返回 | 排序 |
| sin | 0  | number | *    | 开始个数 | 获取长度 |
| ein | 19 | number | *    | 结束个数 | 获取长度 |
| picSize | 300 | number | * | [150,300,500,800] | 图片大小 |


#### 请求方式

参数名称不可改变

```js
axios.get(url, {
  params:{
    categoryId: 10000000,
    sortId: 5,
    sin: 0, // 开始个数
    ein: 19, // 结束个数
    picSize: 300
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
  data:[
    {
      "diss_id": "6813301314",
      "diss_name": "放松大脑，开始卷入一次神游",
      "menu_pic": "http://p.qpic.cn/music_cover/Fe6emiag6IuVbMib3oN6yctT",
      "commit_time": "2019-03-27",
      "creator_name": "就是一个听歌der",
      "creator_avatar": "",
      "listen_num": 560391,
      "listen_str": "56.0万",
      "introduction": ""
    },
    ......
  ]
}
```

