<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-for="list in lists"
         v-if="lists&&lists.length">
      <a class="block-item js-address-item address-item" :class="{'address-item-default':list.isDefault}">
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
        <a class="address-edit" @click="toEdit(list)">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn"
                   :to="{name:'form',query:{type:'add'}}">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  import Address from 'js/addressService.js'

  export default {
    name: "allList",
    data() {
      return {
        lists: null
      }
    },
    created() {
      Address.list().then(res => {
        this.lists = res.data.lists
      })
    },
    methods: {
      toEdit(list){    //编程式路由
        this.$router.push({name: 'form', query: { type: 'edit',list}})
      }
    }

  }
</script>

<style scoped>
  @import './address_base.css';
  @import './address.css';
</style>
