<template>
  <div class="calculator">
	<div class="calculator__caption">
		Калькулятор
	</div>
	<div class="calculator__display">
	  <input class="calculator__operand" v-model.number="operand1" type="number"/>
	  <input class="calculator__operand" v-model.number="operand2" type="number"/>
	  <span class="calculator__result">
		= {{result}}
	  </span>
	</div>
	<div class="calculator__keyboard">
	   <button class="calculator__actions" v-on:click="result = operand1 + operand2">+</button>
	   <button class="calculator__actions" v-on:click="result = operand1 - operand2">-</button>	   
	   <button class="calculator__actions" @click="integerDivision">/</button>
	   <button class="calculator__actions" @click="result = operand1 * operand2">*</button>
	   <button class="calculator__actions" @click="result = operand1 ** operand2">^</button>
	</div>
	<label class="screenKeyboard__btnShowHide">
		<input class="screenKeyboard__checkbox" type="checkbox" v-model="screenKeyboard"/>
		Отобразить экранную клавиатуру
	</label>
	<div class="screenKeyboard" v-if="screenKeyboard">
		<div v-if="selectedOperand == 1">
			<button class="screenKeyboard__btn1" v-for="(item,idx) in numbers" :key="idx" 
				@click="operand1 += ''+item; 
				operand1 = Number(operand1.replace(/^0+/, ''));
			">
				{{item}}
			</button>
			<button class="screenKeyboard__btn1"
				@click="operand1 += ''; 
				operand1 = Number(operand1.replace(/[0-9]$/, ''));
			">
				&larr;
			</button>
		</div>
		<div v-else-if="selectedOperand == 2">
			<button class="screenKeyboard__btn1" v-for="(item,idx) in numbers" :key="idx" 
				@click="operand2 += ''+item; 
				operand2 = Number(operand2.replace(/^0+/, ''));
			">
				{{item}}
			</button>
			<button class="screenKeyboard__btn1"
				@click="operand2 += ''; 
				operand2 = Number(operand2.replace(/[0-9]$/, ''));
			">
				&larr;
			</button>
		</div>
		<div class="screenKeyboard__operands">
			<label class="screenKeyboard__operand">
				<input class="screenKeyboard__radio" name="screenKeyboard__operands" type="radio" value="1" checked v-model="selectedOperand"/>
				Операнд 1
			</label>
			<label class="screenKeyboard__operand">
				<input class="screenKeyboard__radio" name="screenKeyboard__operands" type="radio" value="2" v-model="selectedOperand"/>
				Операнд 2
			</label>
		</div>
	</div>	 
  </div>
</template>

<script>
 export default {
   name: 'Calculator',
   data(){
       return {
           operand1: 0,
           operand2: 0,
		   screenKeyboard: false,
		   selectedOperand: 1,
		   numbers: [0,1,2,3,4,5,6,7,8,9],
		   result: 0,
       }
   },
   methods:{
       integerDivision(){
			this.result = Math.floor(this.operand1 / this.operand2);
	   },
   },	
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.calculator{
		padding:20px;
		box-shadow:0 0 5px rgba(0,0,0,1);
		text-align:center;
	}
	.calculator__caption{
		font-size:30px;
		font-weight:700;
		margin:0 0 30px;
	}
	.calculator__display{
		max-width:600px;
		margin:0 auto 15px;
		border-bottom:2px solid rgba(0,0,0,1);
	}
	.calculator__operand{
		margin:0 15px 15px;
		padding:14px;
		border:0;
		background:#000;
		color:#fff;
	}
	.calculator__result{
		text-align:left;
		width:150px;
		display:inline-block;
	}
	.calculator__keyboard{

	}
	.calculator__actions{
		cursor:pointer;
		width:44px;
		text-align:center;
		margin:0 15px 15px;
		padding:5px;
		font-size:30px;
		background:#000;
		color:#fff;
		border:0;
		border-radius:0;
	}

	.screenKeyboard__btn1{
		cursor:pointer;
		width:44px;
		text-align:center;
		margin:15px 5px;
		padding:5px;
		font-size:30px;
		background:#000;
		color:#fff;
		border:0;
		border-radius:0;
	}
</style>
