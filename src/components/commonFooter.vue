<template>
  <div class="tap-bar-group">
    <div class="tap-bar-item" @click="tapFooter('index','/')">
      <!-- <figure class="tap-bar-img tap-bar-img-index" v-bind:style="{height:commonStyle.height,width:commonStyle.width,backgroundImage:pIndexKey==='index'? indexImgActive:indexImg,backgroundSize:commonStyle.backgroundSize}"></figure> -->
      <!-- <text class="tap-bar-img iconfont" :class="pIndexKey==='index'? 'bar-active':''">&#xe660;</text> -->
      <image :src="loadImage('jianguo.png')" class="tap-bar-img"></image>
      <!-- <image style="width:500px;height:500px" src="https://vuejs.org/images/logo.png"></image> -->
      <!-- <text>首页</text> -->
    </div>
     <div class="tap-bar-item" @click="tapFooter('bid','/')">
      <text class="tap-bar-img iconfont" :class="pIndexKey==='bid'? 'bar-active':''">&#xe661;</text>
      <!-- <figure class="tap-bar-img tap-bar-img-index" v-bind:style="{height:commonStyle.height,width:commonStyle.width,backgroundImage:pIndexKey==='bid'? bidImgActive:bidImg ,backgroundSize:commonStyle.backgroundSize}"></figure> -->
      <text>项目</text>
    </div>

    <div class="tap-bar-item" @click="tapFooter('account','/login')">
      <!-- <figure class="tap-bar-img tap-bar-img-index" v-bind:style="{height:commonStyle.height,width:commonStyle.width,backgroundImage: pIndexKey==='account'? accountImgActive:accountImg ,backgroundSize:commonStyle.backgroundSize}"></figure> -->
       <text class="tap-bar-img iconfont" :class="pIndexKey==='account'? 'bar-active':''">&#xe660;</text>
      <text>登录</text>
    </div>
  </div>
</template>

<script>
    // console.log(loadImage('jianguo.png'));
   export default {
        name:'commonFooter',
        data () {
            return {
              commonStyle:{
                width:'52px',
                height:'90px',
                backgroundSize:'cover',
              },
              indexImg:'url(https://m.phcaifu.cn/images/index.png)',
              bidImg:'url(https://m.phcaifu.cn/images/invest.png)',
              accountImg:'url(https://m.phcaifu.cn/images/mine.png)',
              indexImgActive:'url(https://m.phcaifu.cn/images/index_h.png)',
              bidImgActive:'url(https://m.phcaifu.cn/images/invest_h.png)',
              accountImgActive:'url(https://m.phcaifu.cn/images/mine_h.png)',
              pIndexKey:'index'
            }
        },
        methods: {
          tapFooter(tag,routerUrl){
            if(this.pIndexKey === tag) return;
            this.pIndexKey = tag;
           this.jump(routerUrl);
          }
        }
    }
</script>

<style scoped >
.iconfont {
        font-family:iconfont;
    }
    .bar-active{
        color:#b4282d;
    }
  .tap-bar-group{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    z-index: 1000;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    background-color: #fff;
   border-style: solid;
   border-top-width: 2px;
   border-top-color: #f5f5f5;

  }
  .tap-bar-img{
    height:90px;
    width: 90px;
  }
  .tap-bar-item .tap-bar-title{
    color: #808080;
    font-size: 22px;
  }
</style>

