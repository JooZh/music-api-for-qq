## 获取歌手经历信息

#### 全路径

```
http://localhost:8080/music/api/singer_desc
```

#### 前置条件

> 需要得到歌手 mid    
>
> 相关接口：[http://localhost:8080/music/singer_list](https://github.com/JooZh/music-api-for-qq/blob/master/docs/singer_list.md)

#### 参数说明

| 参数名    | 默认值         | 类型   | 必填 | 可选参数 | 说明               |
| :-------- | -------------- | ------ | ---- | -------- | ------------------ |
| singer_mid | 002J4UUk29y8BY | string | *    | 无       | 歌手的唯一标识     |

#### 请求方式

参数结构和名称不可改变，只能修改参数值

```js
axios.get(url, {
  params:{
    singer_mid: '002J4UUk29y8BY',
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
    desc: [
      '周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市',
      '2003年登上美国《时代周刊》亚洲版封面人物。',
      .......
    ], 
    basic:[
      {
        key: "职业",
        value: [
          "音乐人",
          "制作人",
          "导演",
          "企业家等"
        ]
      },
      ......
    ],
    other:[
      {
        key: "从艺历程",
        value:[
          '1998年，咻比嘟哗餐厅驻唱。',
          '1999年12月，吴宗宪与周杰伦约定十天时间....'
        ]
      },
      ......
    ]
  }
}
```

