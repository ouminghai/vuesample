<template>
  <div>
      <mu-appbar title="Title">
        <mu-icon-button icon='menu' slot="left"/>
        <mu-icon-button icon='expand_more' slot="right"/>
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange" >
        <mu-tab value="game" title="热~游"/>
        <mu-tab value="film" title="热~影"/>
      </mu-tabs>
    <div class="view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'rage'
      }
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      var tmpArr = this.$route.path.split('/')
      if (tmpArr[1] === 'index') {
        this.handleTabChange(tmpArr[2])
      }
    },
    watch: {
      '$route' (to, from) {
        const path = to.path
        var tmpArr = path.split('/')
        console.log(tmpArr)
        if (tmpArr[1] === 'index') {
          this.handleTabChange(tmpArr[2])
        }
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
        this.$router.push({ path: '/index/' + val })
      }
    }
  }
</script>
