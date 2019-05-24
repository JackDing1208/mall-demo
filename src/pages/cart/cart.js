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
    cartList: null,
    editable: false,

  },
  computed: {
    isAll: {
      //主动设置计算属性时先通过set改变get中用到的data,再通过get返回新值
      get() {
        if (this.cartList) {
          return this.cartList.every((shop) => {
            return shop.checked === true
          })
        }
        return false
      },
      set(value) {
        this.cartList.forEach((shop)=>{
          shop.checked=value
          shop.goodsList.forEach((good)=>{
            good.checked=value
          })
        })
      }
    }
  },
  created() {
    this.getCartList()
  },
  methods: {
    getCartList() {
      axios.get(url.cartList).then(res => {
        //先加属性再给data赋值实现响应式
        res.data.cartList.forEach((shop) => {
          shop.checked = true
          shop.goodsList.forEach((good) => {
            good.checked = true
          })
        })

        this.cartList = res.data.cartList
      })
    },
    selectGood(good, shop) {
      good.checked = !good.checked

      shop.checked = shop.goodsList.every((good) => {   //every方法检验每个元素是否符合要求，根据全部判断结果返回值
        return good.checked === true
      })


    },
    selectShop(shop) {
      shop.checked = !shop.checked
      shop.goodsList.forEach((good) => {
        good.checked = shop.checked
      })
    },
    selectAll() {
      this.isAll = !this.isAll
      console.log(this.isAll);
    }
  },
  mixins: [Mixin]
})
