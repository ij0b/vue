<template>
  <div id="app" class="app">
    <header>
      <h1 class="caption">My personal costs</h1>
    </header>
    <main>
		<AddPayment @addNewPayment="addData" />	
		<div class="app__total">
			Total: {{getFPV}}
		</div>
		<PaymentsDisplay :list="paymentsList"/>
		<Pagination />	
    </main>
  </div>
</template>
 
<script>
  import PaymentsDisplay from "./components/PaymentsDisplay.vue";
  import AddPayment from "./components/AddPayment.vue";
  import Pagination from "./components/Pagination.vue";
  import { mapMutations, mapGetters, mapActions } from 'vuex'

  export default {
    name: "App",
    components: {
      PaymentsDisplay,
      AddPayment,
      Pagination,
    },
    methods: {
		...mapMutations([
			'setPaymentListData',
			'addDataToPaymentsList',
		]),
		...mapActions([
			'fetchData',
			'fetchCategory'
		]),
		addData(data){
			this.addDataToPaymentsList(data)
		}, 
    },
    computed: {
      ...mapGetters({
        paymentsList:'getPaymentList',
        categories: 'getCategoryList'
      }),
      getFPV(){
        return this.$store.getters.getFullPyamentValue
      },
    },
    created(){
      this.fetchData({numberPage:2,numberTrPage:5});
      if(!this.categories.length) {
        this.fetchCategory()
      }
    }
};
</script>
 
<style scoped>
	.app__total{
		font-size:20px;
		font-weight:700;
		margin:0 0 15px;
	}
</style>
