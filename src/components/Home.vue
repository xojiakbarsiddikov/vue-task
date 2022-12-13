<template>
 <div>
   <header>
     <Header />
   </header>
   <main>
     <Main />
     <Select class="select"/>
     <Checkbox />
   </main>
 </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
export default {
  name: "vHome",
  components: {
    Header,
    Main,
    Select,
    Checkbox
  }
}
</script>

<style scoped>
 main {
   padding: 0 30px;
 }
 .select {
   margin: 30px 0;
 }
</style>