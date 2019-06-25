
const apiList  = [
    {
        groupName:'推荐列表',
        groupList: [
            {
                name: '获取推荐新发专辑',
                url:'/music/api/recommend_new_album',
                status:'success',
            },{
                name: '获取推荐新发MV',
                url:'/music/api/recommend_new_mv',
                status:'success',
            },{
                name: '获取推荐新发单曲',
                url:'/music/api/recommend_new_song',
                status:'success',
            },{
                name: '获取为你推荐歌单',
                url:'/music/api/recommend_songlist_hot',
                status:'success',
            },{
                name: '获取标签推荐歌单',
                url:'/music/api/recommend_songlist_tag',
                status:'success',
            }
        ]
    },{
        groupName:'歌曲相关',
        groupList: [
            {
                name: '获取歌曲详情',
                url:'/music/api/song_detail',
                status:'success',
            },{
                name: '获取歌曲歌词',
                url:'/music/api/song_lyric',
                status:'success',
            },{
                name: '获取歌曲播放连接',
                url:'/music/api/song_play',
                status:'success',
            }
        ]
    },{
        groupName:'歌手相关',
        groupList: [
            {
                name: '获取歌手列表',
                url:'/music/api/singer_list',
                status:'success',
            },{
                name: '获取歌手详情',
                url:'/music/api/singer_detail',
                status:'error',
            },{
                name: '获取歌手关注度',
                url:'/music/api/singer_attention',
                status:'success',
            },{
                name: '获取歌手单曲列表',
                url:'/music/api/singer_song',
                status:'success',
            },{
                name: '获取歌手歌单列表',
                url:'/music/api/singer_album',
                status:'success',
            },{
                name: '获取歌手MV列表',
                url:'/music/api/singer_mv',
                status:'success',
            },{
                name: '获取歌手粉丝MV列表',
                url:'/music/api/singer_fans_mv',
                status:'success',
            },{
                name: '获取相似歌手列表',
                url:'/music/api/singer_similar',
                status:'success',
            },{
                name: '获取歌手背景介绍',
                url:'/music/api/singer_desc',
                status:'success',
            }
        ]
    },{
        groupName:'评论相关',
        groupList: [
            {
                name: '获取评论列表',
                url:'/music/api/commont_list',
                status:'success',
            }
        ]
    },{
        groupName:'排行榜相关',
        groupList: [
            {
                name: '获取排行榜列表',
                url:'/music/api/top_list',
                status:'success',
            },{
                name: '获取排行榜详情',
                url:'/music/api/top_detail',
                status:'success',
            }
        ]
    },{
        groupName:'MV相关',
        groupList: [
            {
                name: '获取MV列表',
                url:'/music/api/mv_list',
                status:'success',
            },{
                name: '获取MV详情(全部)',
                url:'/music/api/mv_detail_all',
                status:'success',
            },{
                name: '获取MV文字介绍(拆分)',
                url:'/music/api/mv_detail_info',
                status:'success',
            },{
                name: '获取相关MV推荐(拆分)',
                url:'/music/api/mv_detail_other',
                status:'success',
            },{
                name: '获取MV播放链接(拆分)',
                url:'/music/api/mv_play',
                status:'success',
            }
        ]
    },{
        groupName:'歌单相关',
        groupList: [
            {
                name: '获取歌单列表',
                url:'/music/api/menu_list',
                status:'success',
            },{
                name: '获取歌单标签',
                url:'/music/api/menu_tags',
                status:'success',
            },{
                name: '获取歌单详情',
                url:'/music/api/menu_detail',
                status:'success',
            }
        ]
    },{
        groupName:'专辑相关',
        groupList: [
            {
                name: '获取专辑列表和标签',
                url:'/music/api/album_list',
                status:'success',
            },{
                name: '获取专辑详情',
                url:'/music/api/album_detail',
                status:'success',
            }
        ]
    },{
        groupName:'搜索相关',
        groupList: [
            {
                name: '获取搜索关键字',
                url:'/music/api/search_hot_key',
                status:'success',
            }
        ]
    },{
        groupName:'焦点图相关',
        groupList: [
            {
                name: '获取移动版焦点图',
                url:'/music/api/banner_h5',
                status:'success',
            },{
                name: '获取PC版焦点图',
                url:'/music/api/banner_index',
                status:'success',
            },{
                name: '获取专辑焦点图',
                url:'/music/api/banner_album',
                status:'success',
            }
        ]
    }
]

export default apiList