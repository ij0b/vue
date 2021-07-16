<template>
  <div id="app" class="app">
    <header>
		<h1 class="caption">My personal costs</h1>
		<div class="menu">
			<router-link to='/dashboard'>Dashboard</router-link> /
			<router-link to='/about'>About</router-link> /
			<button @click="goToThePageNotFound">Not Found</button>
			<router-link to='/payment'>Payment</router-link> /
		</div>
    </header>
    <main>
		<div class="content-page">
			<router-view/>
			<!-- <About v-if="page === 'about'"/>
			<Dashboard v-if="page === 'dashboard'"/>
			<NotFound v-if="page === 'notfound'"/> -->
		</div>
	
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
		goToThePageNotFound(){
			// this.$router.push({name: "NotFound"})
		},
		setPage(){
			console.log('location - ', location);
		}
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
    },
	mounted(){
		console.log('location - ',location);
		//if(location.pathname = '/add/payment/Food'){
			//document.querySelector('.addPaymentForm__field').value = 1;
		//}
		//window.addEventListener('popstate', this.setPage)
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
