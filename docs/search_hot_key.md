## 获取热门搜索关键字

#### 全路径

```
http://localhost:8080/music/api/searc_hot_key
```

#### 前置条件

> 无
>

#### 参数说明

> 无
>

#### 请求方式

参数名称不可改变

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
      "k": "该死的温柔 ",
      "n": 405528,
      "s": "40.6万"
    },
    ......
  ]
}
```

