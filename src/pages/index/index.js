import Vue from 'vue'
import router from './router'
import axios from 'axios'
import url from '../../modules/js/api.js'   //webpack中配置了路径，但感觉有bug
import './index.css'
import 'css/common.css'
import {InfiniteScroll} from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    lists: null,
    loading: false,
  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      this.loading=true
      axios.get(url.hotLists).then((res) => {
        if (!this.lists) {
          this.lists = res.data.lists
        } else {
          this.lists = this.lists.concat(res.data.lists)
        }
        this.loading=false
        console.log(this.lists);
      })
    }
  }
})
