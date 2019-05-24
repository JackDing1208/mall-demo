import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/api.js'
import Mixin from 'js/mixin.js'


import './cart.css'
import './cart_base.css'
import './cart_trade.css'

new Vue({
  el: ".container",
  data: {
    cartList:null,
    editable:false
  },
  created() {
    this.getCartList()
  },
  methods: {
    getCartList() {
      axios.get(url.cartList).then(res => {
        //先加属性再给data赋值实现响应式
        res.data.cartList.forEach((shop)=>{
          shop.checked=true
          shop.goodsList.forEach((good)=>{
            good.checked=true
          })
        })

        this.cartList= res.data.cartList
      })
    },
    selectGood(good){
      good.checked=!good.checked
    }
  },
  mixins: [Mixin]
})
