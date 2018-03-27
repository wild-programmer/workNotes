<template>
  <div class="tmp">
    <div class="body" >
       <div class="mark" id="pullDown">13Aug</div>
      <div class="item" id="wrapper">
        <ul class="posts large" id="thelist">
           <li v-for="item in result">
              <span href="javascript:;" class="tag">去远方</span>
              <div class="cont">
                  <h3>{{item.h3}}</h3>
                  <div class="brief">
                      <p :class="{only:item.type=='01'}" v-show="item.type!=='03'">{{item.p}}</p>
                      <div  v-show="item.type!=='01'" v-bind:class="{thumb:item.type=='02',gallery:item.type=='03'}" >
                        <img :src="item.img" alt="">
                      </div>
                  </div>
              </div>
            </li>            
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        result:''
      }        
    },
    mounted: function () {
        var self = this
        axios.get('../../static/json/home.json')
      .then(function (response) {
        self.result = response.data.result
      })
      .catch(function (error) {
        // self.fetchError = error
      })
    }
}
</script>


<style scoped>
.cont {
  padding: 1rem 0;
}
.body .large .cont {
  padding: 1.25rem 0;
}
.body .posts .brief {
  position: relative;
}
.body .posts .brief p {
  line-height: 1.75;
  color: #7f7f7f;
  font-size: 0.6875rem;
  padding-right: 4.375rem;
}
.body .posts .brief p.only {
  padding-right: 0;
}
.body .posts .thumb {
  width: 3.75rem;
  height: 3.75rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
}
.body .posts .gallery {
  display: flex;
  justify-content: space-between;
}
img{
  max-width: 100%;
}
li{
  list-style: none;
}
ul{
  padding-left: 8px
}
</style>



