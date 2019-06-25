<template>
  <div class="header">
    <div class="title">{{item.name || "API Name" }}</div>
    <div>
      <el-input placeholder="please enter or select api" v-model="url" class="input-with-select">
        <el-select v-model="value" slot="prepend" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="send" slot="append" @click="send">Send</div>
      </el-input>
    </div>
    <div class="notice">
      本页面只是测试默认数据，如需修改测试参数请参考说明文档 
      <a href="https://github.com/JooZh/music-api-for-qq#api-%E5%88%97%E8%A1%A8" target="_blank">查看说明文档</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      description: "传入的数据"
    }
  },
  data() {
    return {
      url: "",
      options: [
        {
          value: "GET",
          label: "GET"
        },
        {
          value: "POST",
          label: "POST"
        },
        {
          value: "PUT",
          label: "PUT"
        },
        {
          value: "DELELT",
          label: "DELELT"
        }
      ],
      value: "GET",
      json:null
    };
  },
  watch: {
    item: {
      deep: true,
      handler(newVal, oldVal) {
        this.fomartPath(newVal);
      }
    }
  },
  methods: {
    fomartPath(newVal) {
      this.url = window.location.origin + newVal.url;
    },
    send() {
      if (!this.url) return;
      this.$emit('clearCode')
      this.axios.get(this.url).then(response => {
        let json = this.syntaxHighlight(response.data);
        this.$emit('showCode',json)
      });
    },
    syntaxHighlight(json) {
      if (typeof json != "string") {
        json = JSON.stringify(json, undefined, 2);
      }
      json = json.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function(match) {
          var cls = "number";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key";
            } else {
              cls = "string";
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean";
          } else if (/null/.test(match)) {
            cls = "null";
          }
          return '<span class="' + cls + '">' + match + "</span>";
        }
      );
    }
  }
};
</script>
<style lang="stylus">
.header 
  height: 150px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  .title 
    line-height: 50px;
    font-weight: 600;
  .notice
    line-height 50px;
    a
      color #06f
  .send 
    cursor: pointer;
</style>