<template>
	<div class="pagination">
		<div  v-for="(item, idx) in numberPages" :key="idx" class="pagination__btn" v-bind:class="{act: idx+1 == numberPage}" @click="numberBtn(idx+1)">
			{{idx + 1}}
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

export default {
    name: "Pagination",
    data(){
        return {
            numberPages: this.$store.state.numberPages,
			numberPage: this.$store.state.numberPage,
			rangeActivePayment: this.$store.state.rangeActivePayment,
        }
    },
    methods: {
		...mapActions([
			'fetchData',
		]),
		numberBtn(idx){
			this.numberPage = idx;
			this.$store.state.numberPage = this.numberPage;
			this.fetchData({numberPage:this.$store.state.numberPage,numberTrPage:5});
		}
    }
}
</script>

<style scope>
	.pagination{
		text-align:center;
		display:flex;
		flex-wrap:wrap;
		justify-content:center;
		max-width:500px;
		width:100%;
	}
	.pagination__btn{
		padding: 5px;
		display:flex;
		align-items:center;
		justify-content:center;
		box-shadow: 0 0 5px rgb(0 0 0 / 50%);
		width: 40px;
		height:40px;
		margin:0 10px 10px;
		box-sizing: border-box;
		background: #25A79A;
		color: #fff;
		box-shadow: 0 0 5px rgb(0 0 0 / 50%);
	}
	.pagination__btn:not(.act){
		cursor:pointer;
	}
	.pagination__btn.act{
		cursor: context-menu;
		background: #05877A;
	}
</style> 