##### 获取歌手列表：

```js
request: {
    url:'/music/api/singer_list'    	 			// 请求地址
    params: {	
      picSize: 150, 						// 【可选】图片大小       默认150  可选 300 500 800
      param: {
        area: -100,							// 【可选】区域选择       默认全部 
        sex: -100,							// 【可选】性别选择		  默认全部
        genre: -100,						// 【可选】歌曲类目选择   默认全部
        index: -100,						// 【可选】字母分类选择   默认热门
        cur_page: 1							// 【可选】当前的页数	 默认第一页 每页数量 80
      }
    }
}
```

```js
response: {
    total: 23706,										// 歌手总数量
    tags: {												// 可选标签 请查看返回数据
		area: [{id:-100,name:"全部"}, ...],
        genre: [{id:-100,name:"全部"}, ...],
        index: [{id:-100,name:"热门"}, ...],
        sex: [{id:-100,name:"全部"}, ...]
    }		
    singer_list:[{										// 歌手列表
		country: "内地"
		singer_id: 5062
		singer_mid: "002J4UUk29y8BY"
		singer_name: "薛之谦"
		singer_pic_jpg: "http://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg"
		singer_pic_webp: "http://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.webp"
      },
      ......
    ]
}
```

