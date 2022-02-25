<template>
  <h1 class="container" ref="dom" >APP</h1>
  {{money}}
  <button @click="say()" >检验混入的函数</button>
  <hr>
  <Son ></Son>
</template>
<script>
import Son from './Son.vue'
// import { followMinix } from './followMixin'

import { onBeforeMount, onMounted, reactive, ref, toRef,toRefs ,computed, watch, provide} from 'vue';
export default {
name:'App',
// mixins:[followMinix],
components:{
  Son
},
setup() {
  const changNum = ()=>{
    money.value++
  }
const money = ref(66)
provide('money',money)
provide('changNum1',changNum)

const changFunction=(value) =>{
  console.log(value);
 money.value = money.value-value
}
provide('changFunction',changFunction)
return { money  }
}
}
</script>

<style>

</style>