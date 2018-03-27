<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>乘沖到此一遊</h2>
    <!-- <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <p>今日溫度：{{wendu}}</p>
    <p>穿衣建议：{{chuanyi}}</p>
    <p>
      <button @click="shenggao">升高温度</button>
      <button @click="jiangdi">降低温度</button>
    </p> 
  </div>
</template>

<script>
/* mixin混入部分 先执行混入的 */
var addconsole={
    updated:function(){
      console.log('数据改变')
    }
}
/* mixin部分 */
/* Extends 拓展 */
var extentsObj={
  updated:function(){
      console.log('Extends 拓展de ')
    }
}
/* Extends 拓展 */
var dataAll={
  msg: 'Welcome to Your Vue.js App',
  wendu:15,
  chuanyi:'衬衫'
}
var chuanyi_arr=['衬衫','T恤短袖',];
export default {
  name: 'hello',
  methods:{
    shenggao:function(){
      dataAll.wendu+=5;
    },
    jiangdi:function(){
      dataAll.wendu-=5;
    }
  },
  mixins:[addconsole],
  watch:{
    wendu:function(newVal,oldVal){
      if(newVal>=25){
         this.chuanyi=chuanyi_arr[1];
      }else if(newVal<=15){
        this.chuanyi=chuanyi_arr[0];
      }
    }
  },
  extends:extentsObj,
  data () {
    return dataAll
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
