<template>
  <div class="container " style="min-height: 597px;">
    <div class="section section-first">
      <div class="block form js-form">
        <input class="js-id" name="id" type="hidden" value="69150287">
        <div class="block-item" style="border-top:0;">
          <label>收货人</label>
          <input type="text" placeholder="请输入姓名" name="user_name" v-model="name" maxlength="20">
        </div>
        <div class="block-item">
          <label>联系电话</label>
          <input type="tel" placeholder="联系电话" name="tel" v-model="tel" maxlength="11">
        </div>
        <div class="block-item">
          <label>选择地区</label>
          <div class="select-group">
            <select class="js-province-selector" v-model="provinceValue">
              <option :value="-1">选择省份</option>
              <option :value="p.value" v-for="p in addressData.list" :key="p.value">{{p.label}}</option>
            </select>
            <select class="js-city-selector" v-model="cityValue">
              <option :value="-1">选择城市</option>
              <option :value="c.value" v-for="c in cityList" :key="c.value">{{c.label}}</option>
            </select>
            <select class="js-county-selector" name="area_code" v-model="districtValue">
              <option :value="-1">选择地区</option>
              <option :value="d.value" v-for="d in districtList" :key="d.value">{{d.label}}</option>
            </select>
          </div>
        </div>
        <div class="block-item">
          <label>详细地址</label>
          <input type="text" placeholder="街道门牌信息" name="address_detail" v-model="address" maxlength="100">
        </div>
      </div>
    </div>
    <div class="block section js-save block-control-btn" @click="save">
      <div class="block-item c-blue center">保存</div>
    </div>
    <div class="block section js-delete block-control-btn" v-show="type==='edit'" @click="remove">
      <div class="block-item c-red center">删除</div>
    </div>
    <div class="block stick-bottom-row center js-save-default"
         v-show="type==='edit'" @click="setDefault">
      <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
    </div>
  </div>
</template>

<script>
  import Address from 'js/addressService.js'

  export default {
    name: "formList",
    data() {
      return {
        name: '',
        tel: '',
        provinceValue: -1,
        cityValue: -1,
        districtValue: -1,
        address: '',
        id: '',
        type: this.$route.query.type,
        addressData: require('js/address.json'),
        cityList: null,
        districtList: null,
      }
    },
    created() {
      if (this.type === 'edit') {
        let list = this.$route.query.list
        this.name = list.name
        this.tel = list.tel
        this.provinceValue = list.provinceValue
        this.cityValue = list.cityValue
        this.districtValue = list.districtValue
        this.address = list.address
        this.id=list.id
      }
    },
    methods: {
      save() {
        let {name, tel, provinceValue, cityValue, districtValue, address} = this
        let data = {name, tel, provinceValue, cityValue, districtValue, address}
        if (this.type === 'edit') {
          data.id = this.id
          Address.update(data).then(res => {
            this.$router.go(-1)
          })
        } else {
          Address.add(data).then(res => {
            this.$router.go(-1)
          })
        }
      },
      remove(){
        Address.remove(this.id).then(res => {
          this.$router.go(-1)
        })
      },
      setDefault(){
        Address.setDefault(this.id).then(res => {
          this.$router.go(-1)
        })
      }
    },

    watch: {
      provinceValue(value,old) {
        if (this.addressData) {
          this.addressData.list.forEach((p) => {
            if (p.value === value) {
              this.cityList = p.children
                if(old!==-1){
                  this.cityValue = -1
                  this.districtValue= -1
                }
            }
          })
        }

      },
      cityValue(value,old) {
        if (this.cityList) {
          this.cityList.forEach((c) => {
            if (c.value === value) {
              this.districtList = c.children
              if(old!==-1){
                this.districtValue= -1
              }
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  @import './address_base.css';
  @import './address.css';
</style>
