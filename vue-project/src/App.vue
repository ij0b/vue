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
 
export default {
  name: "App",
  components: {
    AddPaymentForm,
    PaymentsDisplay,
  },
  data: () => ({
    paymentsList: [],
  }),
  methods: {
    fetchData () {
      return [
      {
        date: '28.03.2020',
        category: 'Food',
        value: 169,
      },
      {
        date: '24.03.2020',
        category: 'Transport',
        value: 360,
      },
      {
        date: '24.03.2020',
        category: 'Food',
        value: 532,
      },
      ]
    },
    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    }
  },
  created () {
    this.paymentsList = this.fetchData()
  },
}

</script>
 
<style scoped>

</style>
