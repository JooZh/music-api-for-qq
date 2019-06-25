<template>
<div>
  <div class="title">API List</div>
  <div class="content">
    <el-collapse>
      <template v-for="(api,idx) in apiList" >
        <el-collapse-item :title="api.groupName" :name="idx + 1" :key='idx'>
          <div 
            class="api-item"
            v-for="(item,index) in api.groupList" 
            :class="selectApi == (idx+''+index) ? 'active':''"
            @click="handleChange((idx+''+index),item)" 
            :key="index"><span>{{item.name}}</span><i :class="'el-icon-'+item.status+' '+item.status"></i></div>
        </el-collapse-item>
      </template>
    </el-collapse>
  </div>
</div>
</template>
<script>
import apiList from '@/api/list';

export default {
  data(){
    return{
      selectApi:'',
      activeNames: ['1'],
      apiList: apiList
    }
  },
  methods: {
    handleChange(val,item) {
      this.selectApi = val;
      this.$emit('selectApi',item)
    }
  }
}
</script>
<style lang="stylus">
.aside
  flex 250px 0 0;
  border-right 1px solid #ddd
  position relative
  .title
    font-weight 600
    line-height 50px
    text-indent 10px
    border-bottom 1px solid #ddd
  .content
    position absolute
    top 51px
    left 0
    right 0
    bottom 0
    overflow-y scroll
    .api-item
      line-height 40px;
      border-bottom 1px solid #f0f0f0
      cursor pointer
      display flex
      span 
        flex 1
      i
        font-size 20px
        flex 50px 0 0
        display flex
        justify-content center
        align-items center
        &.success
          color #67C23A
        &.error
          color #F56C6C
        &.warning
          color #E6A23C
      &.active
        color #06f
        
</style>
