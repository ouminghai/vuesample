<template>

  <div class="game-wrap">

    <mu-grid-list class="gridlist-demo">
      <mu-card v-for="card in gameList">
        <mu-card-header title="Myron Avatar" subTitle="sub title">
          <mu-avatar :src="img+'avater.jpeg'" slot="avatar"/>
        </mu-card-header>
        <mu-card-media title="Image Title" subTitle="Image Sub Title">
          <img :src="img+card.img" />
        </mu-card-media>
      </mu-card>
    </mu-grid-list>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        img: 'static/assets/game/',
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
    }
  }
</script>
