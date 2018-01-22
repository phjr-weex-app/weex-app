<template>
  <div class="wrapper">
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src"></image>
            </div>
        </slider>
    <textarea class="textarea" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur"></textarea>
    <input type="text" style="height:88px;">
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')

  export default {
      data(){
return {
     imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
}
      },
    methods: {
      oninput (event) {
        console.log('oninput:', event.value)
        modal.toast({
          message: `oninput: ${event.value}`,
          duration: 0.8
        })
      },
      onchange (event) {
        console.log('onchange:', event.value)
        modal.toast({
          message: `onchange: ${event.value}`,
          duration: 0.8
        })
      },
      onfocus (event) {
        console.log('onfocus:', event.value)
        modal.toast({
          message: `onfocus: ${event.value}`,
          duration: 0.8
        })
      },
      onblur (event) {
        console.log('onblur:', event.value)
        modal.toast({
          message: `input blur: ${event.value}`,
          duration: 0.8
        })
      }
    }
  }
</script>

<style>
 .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
  .textarea {
    font-size: 50px;
    width: 650px;
    margin-top: 50px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
</style>