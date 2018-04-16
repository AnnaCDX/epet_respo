<template>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" @click="goTo('/home')" :class="{on:'/home'==$route.path}">
        <span>
          <i class="iconfont icon-shouyedianpujishishangcheng"></i>
        </span>
        <span>首页</span>
      </a >
      <a href="javascript:;" class="guide_item" @click="goTo('/class')" :class="{on:'/class'==$route.path}">
        <span>
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
      </a >
      <a href="javascript:;" class="guide_item" @click="goTo('/shopCart')" :class="{on:'/shopCart'==$route.path}">
        <span>
          <i class="iconfont icon-qicheqianlian-"></i>
        </span>
        <span>购物车</span>
      </a >
      <a href="javascript:;" class="guide_item" @click="goTo('/myEpet')" :class="{on:'/myEpet'===$route.path}">
        <span>
          <i class="iconfont icon-wode"></i>
        </span>
        <span>我的E宠</span>
      </a>

    </footer>
</template>

<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/css/index.styl'
.footer_guide  //footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
