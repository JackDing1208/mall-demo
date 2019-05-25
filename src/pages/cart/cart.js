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
    selectList: null,
    isEditing:false

  },
  computed: {
    isAll: {
      //主动设置计算属性时先通过set改变get中用到的data,再通过get返回新值
      get() {
        if (this.cartList && this.cartList.length>0) {
          return this.cartList.every((shop) => {
            return shop.checked === true
          })
        }
        return false
      },
      set(value) {
        this.cartList.forEach((shop) => {
          shop.checked = value
          shop.goodsList.forEach((good) => {
            good.checked = value
          })
        })
      }
    },
    totalPrice() {
      //每次计算前清空再赋值
      let currentTotal = 0
      let currentGoods = []
      if (this.cartList) {
        this.cartList.forEach((shop) => {
          shop.goodsList.forEach((good) => {
            if (good.checked) {
              currentTotal += good.price * good.number
              currentGoods.push(good)
            }
          })
        })
      }
      this.selectList = currentGoods
      return currentTotal
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
          shop.checked = false
          shop.editable = false
          shop.editText='编辑'
          shop.goodsList.forEach((good) => {
            good.checked = false
          })
        })

        this.cartList = res.data.cartList
      })
    },
    selectGood(good, shop) {
      good.checked = !good.checked
      //every方法检验每个元素是否符合要求，根据全部判断结果再返回真假值
      shop.checked = shop.goodsList.every((good) => {
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
    },
    editShop(shop){
      shop.editable=!shop.editable
      shop.editText=shop.editable?'完成':"编辑"

    },
    minusGood(good){
      if(good.number>1){
        axios.post(url.cartMinus,{id:good.id,num:1}).then(()=>{
          good.number-=1
        })

      }
      return
    },
    plusGood(good){
      axios.post(url.cartMinus,{id:good.id,num:1}).then(()=>{
        good.number+=1
      })
    },
    removeGood(good,index,shop,shopIndex){
      axios.post(url.cartRemove,{id:good.id}).then(()=>{
        shop.goodsList.splice(index,1)
        if (shop.goodsList.length===0){
          this.cartList.splice(shopIndex,1)
        }
      })
    },
    checkout(){
      if(this.selectList.length>0){
        alert('暂未接入支付功能 ')
      }
      return
    }
  },
  mixins: [Mixin]
})
