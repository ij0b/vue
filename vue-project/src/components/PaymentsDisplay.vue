<template>
  <div class="payments-list">
    <!--<div v-for="(item,idx) in list" :key="idx">-->
      {{getFPV}}
    <!--</div>-->
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters([
      'getPaymentsList',
    ]),
    getFPV () {
      return this.$store.getters.getFullPaymentValue
    }
  },
}
</script>

<style scoped>

</style>
