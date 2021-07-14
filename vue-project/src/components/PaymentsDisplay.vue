<template>
  <table class="paymentsList">
	<tr class="paymentsList__tr">
		<td class="paymentsList__td">
			ID
		</td>
		<td class="paymentsList__td">
			Date
		</td>
		<td class="paymentsList__td">
			Category
		</td>
		<td class="paymentsList__td">
			Value
		</td>
	</tr>
	<tr class="paymentsList__tr" v-for="(item, idx) in list" :key="idx"  v-show="toggle(item)" >
		<td class="paymentsList__td">
			{{ item.id }}
		</td>
		<td class="paymentsList__td">
			{{ item.date }}
		</td>
		<td class="paymentsList__td">
			{{ item.category }}
		</td>
		<td class="paymentsList__td">
			{{ item.value }}
		</td>
     </tr>
  </table>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        list: {
            type: Array,
            default: ()=>[]
        }
    },

    data(){
        return {
			numberPage: this.$store.state.numberPage,
            rangeActivePayment: this.$store.state.rangeActivePayment,
        }
    },

	methods: {
		toggle(item){
			if((item.id <= this.$store.state.rangeActivePayment[1])&&(item.id >= this.$store.state.rangeActivePayment[0])){
				return true
			}
			return false;
		},
		
	}
}
</script>

<style scope>
	.paymentsList{
		margin:0 0 15px;
		max-width:500px;
		width:100%;
		box-shadow:0 0 5px rgba(0,0,0,0.5);
		border-collapse:collapse;
	}
	.paymentsList__td{
		width:25%;
		padding:5px;
		text-align:center;
	}
	.paymentsList__tr:nth-child(1) .paymentsList__td{
		font-size:20px;
		font-weight:700;
	}
	.paymentsList__tr:nth-child(2n+1) .paymentsList__td{
		background:#f3f3f3;
	}
	.paymentsList__td:first-child{
		width:15%;
		text-align:left;
	}
	.paymentsList__td:last-child{
		width:15%;
		text-align:right;
	}
</style> 
