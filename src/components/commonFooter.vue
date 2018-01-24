<template>
  <div class="tap-bar-group">
    <div class="tap-bar-item" @click="tapFooter('index','/')">
      <image class="tap-bar-img" :src="pIndexKey==='index'? tapImages.indexShow:tapImages.indexHide "></image>
      <text class="tap-bar-title" :class="pIndexKey==='index'?'active':''">首页</text>
    </div>
     <div  class="tap-bar-item"  @click="tapFooter('bid','/')">
      <image class="tap-bar-img" :src="pIndexKey==='bid'? tapImages.bidShow:tapImages.bidHide "></image>
      <text class="tap-bar-title" :class="pIndexKey==='bid'?'active':''">项目</text>
    </div>

    <div  class="tap-bar-item" @click="tapFooter('account','/login')">
      <image class="tap-bar-img" :src="pIndexKey==='account'? tapImages.accountShow:tapImages.accountHide "></image>
      <text class="tap-bar-title" :class="pIndexKey==='account'?'active':''">登录</text>
    </div>
  </div>
</template>

<script>
   export default {
        name:'commonFooter',
        data () {
            return {
              commonStyle:{
                width:'52px',
                height:'90px',
                backgroundSize:'cover',
              
              },
              tapImages:{
                indexHide:this.serverStatic().images+'index.png',
                indexShow:this.serverStatic().images+'index_active.png',
                bidHide:this.serverStatic().images+'bid.png',
                bidShow:this.serverStatic().images+'bid_active.png',
                accountHide:this.serverStatic().images+'account.png',
                accountShow:this.serverStatic().images+'account_active.png',
                // indexHide:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516729721633&di=4cd6bdf1511b5610d68eaf1fd1bd97af&imgtype=0&src=http%3A%2F%2Fd10.yihaodianimg.com%2FN00%2FM07%2F89%2F4B%2FCgMBmFMm7BqAfeVuAAKNZt018wc86400_640x640.jpg',
                // indexShow:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516729721633&di=dedc8e93b0f1a3b3233681d2325ef0cf&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2F8114%2Fbb7da8e4-279f-4689-b4cb-358729f005fa.jpg%2521q70.jpg',
                // bidHide:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516729721634&di=61698390f1e50401ff8bb88ebfda7701&imgtype=0&src=http%3A%2F%2Fimg11.360buyimg.com%2Fn12%2F3792%2F2a6c9cb3-1a49-4fd6-a0e3-6860e10e0652.jpg%2521q70.jpg',
                // bidShow:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516729721636&di=6a098badfc978a7902d4dc59ad249105&imgtype=0&src=http%3A%2F%2Fstatic.game.xiaomi.com%2Fgamebbs%2Fattachment%2Fforum%2F201512%2F08%2F095450wrhrucc32c54z599.jpg',
                // accountHide:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516729780815&di=d012d181a3f0eba6eacef94faa3fd62a&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Flarge%2F004dH9d8zy77EDnRWOA90',
                // accountShow:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1402387170,4013439301&fm=27&gp=0.jpg',
                
              },
              pIndexKey:'index',
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
    height: 97px;
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
    height:48px ;
    width: 48px;
    background-repeat: no-repeat;
    background-size: contain;
    align-self:center;
  }
  .tap-bar-item{
    display: flex;
    flex-direction: column;
    justify-content:center;
  }
  .tap-bar-item .tap-bar-title{
    color: #808080;
    font-size: 12px;
    align-self: center;
  }
  .active{
    color: #ff5858;
  }
</style>

