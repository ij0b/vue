<template>
  <div id="app" class="app">
    <header>
		<h1 class="caption">My personal costs</h1>
		<div class="menu">
			<div class="link__container">
				<a class="link" href="/payment/Food?value=200">
					Ссылка payment/Food?value=200 (т.к. и category и value заполнены, кнопка формы закрывает всплывающее окно, а также добавляет новую строку в таблицу)
				</a>
			</div>
			<div class="link__container">
				<a class="link" href="/payment/sport">
					Ссылка payment/sport
				</a>			
			</div>
			<div class="link__container">
				<a class="link" href="/payment/?value=50 ">
					Ссылка payment/?value=50 
				</a>
			</div>
		</div>
    </header>
    <main>
		<AddPayment @addNewPayment="addData"/>
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
    },
	mounted(){

	}
};
</script>
 
<style scoped>
	.app__total{
		font-size:20px;
		font-weight:700;
		margin:0 0 15px;
	}
	.link{
		margin:0 0 15px;
		display:inline-block;
	}
</style>
