<template>
  <div>

      <mu-appbar title="Title">

        <mu-icon-button icon='menu' slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="菜单 1"/>
          <mu-menu-item title="菜单 2"/>
          <mu-menu-item title="菜单 3"/>
          <mu-menu-item title="菜单 4"/>
          <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
      </mu-appbar>

      <mu-tabs :value="activeTab" @change="handleTabChange" >
        <mu-tab value="game" title="热游"/>
        <mu-tab value="film" title="热影"/>
      </mu-tabs>

      <div class="view">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

  </div>
</template>
<style lang="less" >
  @import "../assets/theme.less";
  .game-wrap{
    .mu-card{
      margin-bottom:10px
    }
  }
  .banner-item{
    width: 100%;
    height: 18rem;
    background-size: cover;
  }
</style>
<script>
  export default {
    data () {
      return {
        activeTab: 'game'
      }
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      var tmpArr = this.$route.path.split('/')
      if (tmpArr[1] === 'index') {
        if (tmpArr[2] !== undefined) {
          this.handleTabChange(tmpArr[2])
        }
      }
    },
    watch: {
      '$route' (to, from) {
        const path = to.path
        var tmpArr = path.split('/')
        console.log(tmpArr)
        if (tmpArr[1] === 'index') {
          if (tmpArr[2] !== undefined) {
            this.handleTabChange(tmpArr[2])
          }
        }
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
        console.log(val)
        this.$router.push({ path: '/index/' + val })
      }
    }
  }
</script>
