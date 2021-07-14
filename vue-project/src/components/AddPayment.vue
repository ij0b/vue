<template>
  <div class="addPaymentForm__container">
    <div v-if="formIsOpen == true" class="addPaymentForm__bg" @click="closeForm"></div>
    <div class="addPaymentForm__btn" @click="openForm">
      ADD NEW COST
      <span class="addPaymentForm__plus">
        +
      </span>
    </div>
    <div v-if="formIsOpen == true" class="addPaymentForm">
      <div class="addPaymentForm__closeForm" @click="closeForm">
        X
      </div>
      <div class="addPaymentForm__caption">
        Добавить новый расход
      </div>
      <input class="addPaymentForm__field" placeholder="date" v-model="date" />
      <CategorySelect :categories="categories" @selectedCategory="selectedCategorys"/>
      <input class="addPaymentForm__field" placeholder="value" v-model.number="value" />
      <button class="addPaymentForm__add" @click="onClick">
        ADD
        <span class="addPaymentForm__plus">
        +
        </span>
      </button>
    </div>
  </div>
</template>
 
<script>
  import CategorySelect from "./CategorySelect.vue";
  import { mapGetters} from 'vuex'

  export default {
    name: "AddPayment",
    components: {
      CategorySelect
    },
    data(){
        return {
            date: "",
            category: "",
            value: null,
            formIsOpen: false,
            selected: "",
        }
    },
    methods: {
        onClick(){
            const { category, value } = this;
            const data = {
                date: this.date || this.getCurrentDate,
                category,
                value
            }
            this.$emit('addNewPayment', data)
			console.log("onClick()");
        },
        selectedCategorys(data){
          this.category = data.selected; 
        },
        openForm () {
          this.formIsOpen = true;
        },
        closeForm () {
          this.formIsOpen = false;
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        ...mapGetters({
          categories: 'getCategoryList'
        }),
    }
  }
</script>

<style scoped>

.addPaymentForm__container{

}
.addPaymentForm__bg{
  display:block;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  z-index:20;
}
.addPaymentForm__btn{
  cursor:pointer;
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
  display:block;
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

.addPaymentForm__add{
  cursor:pointer;
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
