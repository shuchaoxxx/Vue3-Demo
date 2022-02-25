<template>
  <div>孙组件</div>
  <p>{{count}}</p>
  <button @click="fn" >点击按钮</button>
  <hr>
</template>

<script>
import { inject } from 'vue'
export default {
 setup(){
   const count = inject('money')
   const changNum2 = inject('changNum1')
   const changFunction = inject('changFunction')
   const fn = ()=>{
     changFunction(10)
   }
   return { count,changNum2, fn }
 }

}
</script>

<style>

</style>