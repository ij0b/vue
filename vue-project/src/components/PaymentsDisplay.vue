<template>
  <div class="payments-list">
    <div v-for="(item,idx) in list" :key="idx">
      {{item}}
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    list: {
      type: Array,
      default: ()=>[],
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
