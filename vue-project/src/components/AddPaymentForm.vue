<template>
  <div class="addPaymentForm__container">
    <div class="addPaymentForm__bg" @click="closeForm"></div>
    <div class="addPaymentForm__btn" @click="openForm">
      ADD NEW COST
      <span class="addPaymentForm__plus">
        +
      </span>
    </div>
    <div class="addPaymentForm">
      <div class="addPaymentForm__closeForm" @click="closeForm">
        X
      </div>
      <div class="addPaymentForm__caption">
        Добавить новый расход
      </div>
      <input class="addPaymentForm__field" placeholder="Date" v-model="date" />
      <!--<input class="addPaymentForm__field" placeholder="Category" v-model="category" />-->
      <select v-model="selected">
        <option v-for="(option,idx) in getCategoryList" :value="option" :key="idx">
          {{ option }}
        </option>
      </select>
      <input class="addPaymentForm__field" placeholder="Value" v-model="value" />
      <button class="addPaymentForm__add" @click="onSaveClick">
        ADD
        <span class="addPaymentForm__plus">
        +
        </span>
      </button>
    </div>
  </div>
</template>
 
<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      value: null,
    }
  },
  computed: {
    ...mapMutations([
      'setPaymentsListData',
    ]),
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick () {
      const { category, value } = this
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value
      }
      //this.$emit('addNewPayment', data)
      this.commit('setPaymentsListData', data)
    },
    openForm () {
      document.querySelector('.addPaymentForm__container').classList.add('act');
    },
    closeForm () {
      document.querySelector('.addPaymentForm__container').classList.remove('act');
    }
  }

}
</script>

<style scoped>

.addPaymentForm__container{

}
.addPaymentForm__container.act .addPaymentForm__bg{
  display:block;
}
.addPaymentForm__bg{
  display:none;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  z-index:20;
}
.addPaymentForm__btn{
  background:#25A79A;
  padding:10px 15px;
  color:#fff;
  display:inline-block;
  margin:0 0 15px;
  box-shadow:0 0 5px rgba(0,0,0,0.5);
}
.addPaymentForm__plus{
  margin:0 0 0 15px;
}
.addPaymentForm{
  display:none;
  padding:25px;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:25;
  margin:auto;
  width:300px;
  height:300px;
  background:#fff;
  box-sizing:border-box;
  text-align:center;
}
.addPaymentForm__container.act .addPaymentForm{
  display:block;
}
.addPaymentForm__add{
  background:#25A79A;
  padding:10px 15px;
  color:#fff;
  display:inline-block;
  margin:0 0 15px;
  box-shadow:0 0 5px rgba(0,0,0,0.5);
  border:0;
}
.addPaymentForm__field{
  padding:15px;
  box-shadow:0 0 5px rgba(0,0,0,0.5);
  width:100%;
  margin:0 0 15px;
  box-sizing:border-box;
  border:0;
}
.addPaymentForm__caption{
  font-size:18px;
  margin:0 0 15px;
  font-weight:700;  
}
.addPaymentForm__closeForm{
  margin:-35px -35px 0 auto;
  width:30px;
  height:30px;
  color:#fff;
  background:#000;
  border-radius:50%;
  line-height:30px;
}

</style>
