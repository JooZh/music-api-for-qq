##### 获取歌手详情：

```js
request: {
    url:'/music/api/singer_detail'    	 		// 请求地址
    params: {
      singermid:'002J4UUk29y8BY',    		// 【必选】*	歌手的唯一标识
      begin:0,    							// 【必选】*	单曲开始查询位置
      num:30, 								// 【必选】*	单曲每次查询返回的条数
      order:'listen'						// 【可选】		单曲列表的排序方式 
    }
}
```

```js
response: {
    singer_id: "5062",
    singer_mid: "002J4UUk29y8BY",						// 歌手 mid
    singer_name: "薛之谦",								  // 歌手名称
    total: 208,											// 单曲总数
    list:[{
		index: 1,										//  序列号
        albumid: 1796874,								//  所属专辑 id
        albummid: "001mTkmb4GJlh4",				 		//  所属专辑 mid
        albumdesc: "string",							//  所属专辑 描述
        albumname: "string",						 	//  所属专辑 名称
        songid: 200255722,								//  歌曲 id
        songmid: "002E3MtF0IAMMY",						//  歌曲 mid
        songname: "string",								//  歌曲名字
        songorig: "string",								//  
        songtype: 0,
        strMediaMid: "002E3MtF0IAMMY",
        vid: "g0022q7z0um"								//  mv id
      },
      ......
    ]
}
```