<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" href='#'>
          <img class="goods-main-photo fadeIn" :src=list.img @load="imgLoad">
        </a>
      </div>
    </div>
    <div class="swiper-pagination" v-show="isShow"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper.js'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: "Swiper",
    props: {
      lists: {}
    },
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    methods: {
      imgLoad() {
        this.isShow = true
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
  }

  .swiper-slide {
    width: 100%;
  }

  .swiper-slide img {
    height: 100%;
    width: 100%;
  }
  .swiper-pagination{
    display: flex;
    justify-content: center;
  }
</style>
