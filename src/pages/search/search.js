import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'

import './search.css'
import 'css/common.css'

let {keyword,id}= qs.parse(location.search.substr(1))      //处理查询参数
console.log(keyword);

new Vue({
  el:'#app',
  data:{
    keyword,
    id,
    searchLists:null,
    goTop:false
  },
  created() {
    axios.get(url.searchLists,{keyword,id}).then((res)=>{
      this.searchLists=res.data.lists
      console.log(this.searchLists);
    })
  },
  mounted() {
    document.addEventListener('scroll',()=>{
      if(window.scrollY>800){
        this.goTop=true
      }else{
        this.goTop=false
      }
    })
  },
  methods:{
    goToTop(){
      Velocity(document.body,'scroll',{duration:500})    //第三方动画库
    }
  }
})
