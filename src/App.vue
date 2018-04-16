<template>
  <div>
    <router-view/>
    <FooteGuide/>
  </div>
</template>

<script>
  import FooteGuide from './components/FooteGuide/FooterGuide.vue'
export default {
 components:{
   FooteGuide
 }
}
</script>

<style>

</style>
