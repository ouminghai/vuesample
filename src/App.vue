<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Player from './components/playerBar'
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
      Player
    },
    computed: {

    }
  }
</script>
