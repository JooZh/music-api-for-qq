## 获取推荐MV列表

#### 全路径

```
http://localhost:8080/music/api/recommend_new_mv
```

#### 前置条件

> 无
>

#### 参数说明

> 无
>

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url).then((response)=>{
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
      "mv_id": 1511853,
      "mv_mid": "n0030difjse",
      "mv_desc": "美国超新星强势圈粉",
      "mv_score": 0,
      "mv_title": "So Am I",
      "mv_pic": "http://y.gtimg.cn/music/common/upload/uploadt_mv_recommend_conf/1203879.jpg",
      "pub_date": "2019-03-07",
      "listen_num": 12326,
      "listen_str": "1.2万",
      "singers": [
        {
          "id": 1520235,
          "mid": "0015UgkM2WB8Go",
          "name": "Ava Max"
        }
      ]
    },
    ......
  ]
}
```

