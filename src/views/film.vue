<template>

  <div class="game-wrap">

    <div id="slider">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="/static/assets/banner1.jpg" class="banner-item"  alt=""></swiper-slide>
        <swiper-slide>
          <img src="/static/assets/banner2.jpg" class="banner-item"  alt=""></swiper-slide>
        <swiper-slide>
          <img src="/static/assets/banner3.jpg" class="banner-item"  alt=""></swiper-slide>
        <swiper-slide>
          <img src="/static/assets/banner4.jpg" class="banner-item"  alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

      <mu-card v-for="card in gameList" style="width:100%">
        <mu-card-header title="Myron Avatar" subTitle="sub title">
          <mu-avatar :src="img+'avater.jpeg'" slot="avatar"/>
        </mu-card-header>
        <mu-card-media title="Image Title" subTitle="Image Sub Title">
          <img :src="img+card.img" />
        </mu-card-media>
      </mu-card>

  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
        img: 'static/assets/film/',
        gameList: [
          {
            name: '',
            img: 'img1.jpg'
          },
          {
            name: '',
            img: 'img2.jpg'
          },
          {
            name: '',
            img: 'img1.jpg'
          },
          {
            name: '',
            img: 'img2.jpg'
          },
          {
            name: '',
            img: 'img1.jpg'
          },
          {
            name: '',
            img: 'img2.jpg'
          },
          {
            name: '',
            img: 'img1.jpg'
          },
          {
            name: '',
            img: 'img2.jpg'
          },
          {
            name: '',
            img: 'img1.jpg'
          },
          {
            name: '',
            img: 'img2.jpg'
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
