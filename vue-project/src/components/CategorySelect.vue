<template>
  <div>
      <select class="select" v-model="selected" @click="$emit('selectedCategory', {selected: selected})">
          <option class="select__option" v-for="(option, idx) in categories" :key="idx" >
              {{option}}
          </option>
      </select>
  </div>
</template>

<script>
export default {
    name: "CategorySelect",
    props: {
        categories: {
            type: Array,
            default: ()=>[]
        }
    },
    data(){
        return {
            selected: ''
        }
    },
    methods: {
 
    }
}
</script>

<style scope>
  .select{
    padding: 15px;
    box-shadow: 0 0 5px rgb(0 0 0 / 50%);
    width: 100%;
    margin: 0 0 15px;
    box-sizing: border-box;
    border: 0;
    background:#fff;
  }
  .select__option{

  }
</style> 