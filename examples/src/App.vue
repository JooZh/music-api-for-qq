<template>
  <div id="app">
    <div class="layout">
      <div class="aside">
        <ApiList @selectApi="selectApi"></ApiList>
      </div>
      <div class="container">
        <SendApi :item="item" @showCode="showCode" @clearCode="clearCode"></SendApi>
        <ShowResult :json="json"></ShowResult>
      </div>
    </div>
  </div>
</template>

<script>
import ApiList from '@/components/ApiList/index';
import SendApi from '@/components/SendApi/index';
import ShowResult from '@/components/ShowResult/index';

export default {
  data(){
    return {
      item:{
        name:'',
        url: '',
        params:{}
      },
      json:''
    }
  },
  components: {
    ApiList,
    SendApi,
    ShowResult
  },
  methods: {
    selectApi(item){
      this.item = item
    },
    showCode(json){
      this.json = json
    },
    clearCode(){
      this.json = '正在获取数据....'
    }
  }
};
</script>
<style lang="stylus">
html,body,#app
  width 100%
  height 100%
.layout
  background-color: #f5f5f5;
  height 100%
  display: flex;
  .container 
    flex 1
    position relative  
.el-collapse
  text-indent 10px
  border-top none
  border-right 1px solid #ddd
.el-collapse-item__header
  background-color #f6f6f6
  border-bottom: 1px solid #ddd;
  font-weight 600
.el-collapse-item__wrap
  border-bottom none
  .el-collapse-item__content
    padding-bottom 0
.el-select
  width 100px;
</style>