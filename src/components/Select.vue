<template>
 <div class="content">
   <div class="select">
     <div class="box text">
       {{ text }}
     </div>
     <div class="box">
       {{ name }}
     </div>
     <div class="box">
       {{ name_list }}
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "vSelect",
  data() {
    return {
      text: 'Маркировка',
      name: 'CVETY65',
      name_list: 'CVERT6'
    }
  }
}
</script>

<style scoped>
  .box {
    border: 1px solid #eeeeee;
    max-width: 150px;
    height: 40px;
    padding: 10px;
    font-size: 18px;
    color: #1d1919;
    cursor: pointer;
  }
  .text {
    font-size: 15px!important;
  }
</style>