<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <text class="desc">Now, let's use vue to build your weex app.</text>
    <div style="margin-top:50px">
      <button @click="update">跳转</button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World'
      }
    },
    methods: {
      update (e) {
        this.$router.push({path: '/test'})
      }
    }
  }
</script>

<style scoped>
  .wrapper { align-items: center; margin-top: 50px}
  .title { padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
</style>
