<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" href='#'>
          <img class="goods-main-photo fadeIn" :src=list.img>
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>

  </div>


</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: "Swiper",
    props: {
      lists: {}
    },
    data(){
      return{
        loading:true
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
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
  }
  .holder{
    height: 180px;
  }

  .swiper-slide {
    width: 100%;
  }

  .swiper-slide img {
    height: 100%;
    width: 100%;
  }
</style>
