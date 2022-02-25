<template>

  <div @click="say()" > 子组件</div>
 
  <hr >
  <GrandSon></GrandSon>
</template>

<script>
import GrandSon from './Grandson.vue'
export default {
components:{
  GrandSon
}
}
</script>

<style>

</style>