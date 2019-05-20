import Vue from 'vue'
import router from './router'
import axios from 'axios'
import url from '../../modules/js/api.js'   //webpack中配置了路径，但感觉有bug
import './index.css'
import 'css/common.css'
import {InfiniteScroll} from 'mint-ui';
import Siderbar from 'components/Siderbar'
import Swiper from 'components/Swiper'

Vue.use(InfiniteScroll);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    lists: null,
    loading: false,
    page: 1,
    isBottom: false,
    pageLimit:7,
    banner:null
  },
  created() {
    this.getLists()
    this.getBanners()
  },
  methods: {
    getLists() {
      if (!this.isBottom) {
        this.loading = true
        axios.get(url.hotLists, {
          pageNum: this.page
        }).then((res) => {
          if (!this.lists) {
            this.lists = res.data.lists
          } else if (this.page > this.pageLimit) {
            this.isBottom = true
          } else {
            this.lists = this.lists.concat(res.data.lists)
          }
          this.page++
          this.loading = false
          console.log(this.lists);
        })
      }
    },
    getBanners(){
      axios.get(url.banner).then((res) => {
        this.banner= res.data.lists;
      })
    }
  },
  components: {
    Siderbar,Swiper
  }
})
