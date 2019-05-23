import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/api.js'
import qs from 'qs'
import Mixin from 'js/mixin.js'

import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_base.css'

let {id}=qs.parse(location.search.substr(1))

new Vue({
  el:'#app',
  data: {
    id,
    goodLists:null
  },
  created() {
    this.getGoods()
  },
  methods: {
    getGoods(){
      console.log(this.id);
      axios.get(url.goods,{id}).then((res)=>{
        this.goodLists=res.data
        console.log(this.goodLists)
      })
    }
  },
  mixins:[Mixin]

})
