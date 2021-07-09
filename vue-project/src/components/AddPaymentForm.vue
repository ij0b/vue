<template>
  <div class="addPaymentForm__container">
    <div class="addPaymentForm__btn" @click="openForm">
      ADD NEW COST
      <span class="addPaymentForm__plus">
        +
      </span>
    </div>
    <div class="addPaymentForm">
      <input placeholder="Date" v-model="date" />
      <input placeholder="Category" v-model="category" />
      <input placeholder="Value" v-model="value" />
      <button @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      value: null,
    }
  },
  computed: {
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
      this.$emit('addNewPayment', data)
    },
    openForm () {
      document.querySelector('.addPaymentForm').classList.add('act');
    }
  }

}
</script>

<style scoped>

.addPaymentForm__contaner{

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
  box-shadow:0 0 5px rgba(0,0,0,0.5);
  padding:25px;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  width:300px;
  height:300px;
}
.addPaymentForm.act{
  display:block;
}


</style>
