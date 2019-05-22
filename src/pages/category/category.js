import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/api.js'
import Siderbar from 'components/Siderbar'
import Mixin from 'js/mixin.js'

import './category.css'
import 'css/common.css'

new Vue({
  el: '#app',
  data: {
    topLists: null,
    topId: -1,
    rankLists:null,
    brandLists:null,
    classLists:null,
  },
  created() {
    this.getTopLists()
    this.getSubLists()
    this.getRankLists(this.topId)},
  mounted(){
    console.log(this.rankLists);
  },
  methods: {
    getTopLists() {
      axios.get(url.topLists).then(
        (res) => {
          this.topLists = res.data.lists
          console.log(res.data)
        }
      )
    },
    chooseTop(id) {
      this.topId = id
      if (id < 0) {
        this.getRankLists(id)
      } else if (id > 0) {
        this.getSubLists(id)
      }
    },
    getSubLists() {
      axios.get(url.subLists).then((res) => {
        this.brandLists=res.data.data.brandList
        this.classLists=res.data.data.categoryList
      })
    },
    getRankLists(id) {
      axios.get(url.rankLists,{id}).then((res) => {
        this.rankLists= res.data.data
        console.log(this.rankLists);
      })
    },
    getSearch(list){
      window.location.href=`search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  components: {
    Siderbar
  },
  mixins:[Mixin]
})
