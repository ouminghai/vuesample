<template>
  <div class="foot">
    <div class="player-mint">
        <div class="mini-content">
          <audio :src="audio.location" @timeupdate="updateTime" @canplay="canPlaySong" @error="loadError"
                 @ended="next" id="audioPlay"/>
            <div class="cover" @click="showDetail">
              <mu-circular-progress v-show="loading" :size="30" />
              <img class="xmplogo" :src="audio.albumPic + '?param=100y100'" v-show="!loading" :alt="audio.name">
            </div>
            <div class="info">
              <div class="name xmpname">{{audio.name}}</div>
              <div class="artist xmpartist">{{audio.singer}}</div>
            </div>
            <div class="control">
              <mu-icon-button class="mini-btn player-list" @click="showList"/>
              <mu-icon-button class="mini-btn player" :class="{pause: playing}" @click="toggleStatus"/>
              <mu-icon-button class="mini-btn next" @click="next"/>
            </div>

            <div class="pro">
              <div class="pro-load proload" :style="{'-webkit-transform':'translateX(' + prBufferedTime +'%)' }"></div>
              <div class="pro-play proplay" :style="{'-webkit-transform':'translateX(' + prCurrentTime +'%)' }"></div>
            </div>
          </div>

          <toast ref="toast"></toast>
          <BottomSheet ref="bottomSheet"></BottomSheet>
      </div>

  </div>
 </template>

<script>
  import Toast from '../components/toast'
  import BottomSheet from '../components/list'

  export default {
    data () {
      return {
        loadedTime: 0,
        playerTime: 0
      }
    },
    components: {
      Toast,
      BottomSheet
    }
  }


</script>
