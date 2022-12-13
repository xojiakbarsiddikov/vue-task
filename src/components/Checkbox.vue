<template>
 <div>
   <form>
     <label for="checkbox">{{ title }}</label>
     <input type="checkbox" id="checkbox" class="checkbox">
   </form>
 </div>
</template>

<script>
export default {
  name: "vCheckbox",
  data() {
    return {
      title: 'Консолидадо'
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
}
 form label {
   width: 220px;
   font-size: 16px;
   color: #4c4b4b;
 }
 form input {
   width: 17px;
   height: 17px;
 }
 form label:hover {
   color: #232020;
   transition: .2s ease-in-out;
   cursor: pointer;
 }
</style>