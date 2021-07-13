<template>
  <div id="app" class="app">
    <header>
      <h1 class="caption">My personal costs</h1>
    </header>
    <main>
      <AddPaymentForm @addNewPayment="addNewPayment" />	
      <PaymentsDisplay :list="paymentsList" />
    </main>
  </div>
</template>
 
<script>

import AddPaymentForm from './components/AddPaymentForm'
import PaymentsDisplay from './components/PaymentsDisplay'
import { mapMutations, mapActions, mapGetters } from 'vuex'
 
export default {
  name: "App",
  components: {
    AddPaymentForm,
    PaymentsDisplay,
  },
  data: () => ({
    paymentsList: [],
    selected: ''
  }),
  methods: {
     ...mapMutations([
      'setPaymentsListData',
    ]),
    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    },
  },
  created () {
    //this.paymentsList = this.fetchData()
    //this.$store.commit(setPaymentsListData', this.fetchData())
    this.setPaymentsListData(this.fetchData())
  },
  computed: {
   ...mapGetters([
     'getCategoryList'
   ])
  },
  actions: {
    ...mapActions([
      'fetchData',
      'loadCategories'
    ])
  },
  mounted () {
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
  }
}

</script>
 
<style scoped>

</style>
