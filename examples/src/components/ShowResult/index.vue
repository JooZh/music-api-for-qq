<template>
  <div class="main">
    <pre class="code" v-html="json">
    </pre>
  </div>
</template>
<script>
export default {
    props:{
      json:{
        type:String
      }
    }
}
</script>
<style lang="stylus">
.main
  position absolute
  left 0
  right 0
  top 151px
  bottom 0
  .code
    font-family 'Verdana, Geneva, Tahoma, sans-serif'
    position absolute
    background-color #fff
    border 1px solid #e5e5e5
    border-radius 5px;
    padding 10px
    left 10px
    right 0
    top 10px
    bottom 10px
    overflow-y auto
    .string 
      color: green;       
    .number  
      color: darkorange;    
    .boolean  
      color: blue;      
    .null  
      color: magenta;         
    .key  
      color: red;        
</style>