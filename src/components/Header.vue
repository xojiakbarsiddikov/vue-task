<template>
 <header>
    <div class="content">
      <button class="nav-btn open-btn">
        <i class="fas fa-bars"></i>
      </button>
      <h2>{{ info }}</h2>
    </div>
   <div class="nav nav-black">
     <div class="nav nav-red">
       <div class="nav nav-white">
         <button class="nav-btn close-btn">
           <i class="fas fa-times"></i>
         </button>
          <button class="logo">{{ area }}</button>
         <ul class="list">
           <li><a href="#" target="_blank">{{ home }}</a></li>
           <li><a href="#" target="_blank">{{ contact }}</a></li>
           <li><a href="#" target="_blank">{{ teams }}</a></li>
           <li>
             <ul>
               <li><a href="#" target="_blank">{{ product }}</a></li>
               <li><a href="#" target="_blank">{{ cards }}</a></li>
               <li><a href="#" target="_blank">{{ login }}</a></li>
               <li><a href="#" target="_blank">{{ logout }}</a></li>
               <li><a href="#" target="_blank">{{ driver }}</a></li>
             </ul>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </header>
</template>

<script>
export default {
  name: "vHeader",
  data() {
    return {
      area: 'Nav Bar',
      info: 'Информация',
      home: 'Home',
      contact: 'Contact',
      teams: 'Teams',
      product: 'Products',
      cards: 'Cars',
      driver: 'Driver',
      login: 'Login',
      logout: 'Logout'
    }
  },
  mounted() {
    const open_btn = document.querySelector('.open-btn')
    const close_btn = document.querySelector('.close-btn')
    const nav = document.querySelectorAll('.nav')


    open_btn.addEventListener('click', () => {
      nav.forEach(nav_el => nav_el.classList.add('visible'))
    })

    close_btn .addEventListener('click', () => {
      nav.forEach(nav_el => nav_el.classList.remove('visible'))
    })
  }
}
</script>

<style scoped>

.text {
  text-transform: uppercase;
}

.logo {
  width: 200px;
  height: 33px;
  border: none;
  border-radius: 3px;
  background: #204ae2;
  color: #ffff;
}

.nav-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
}

.open-btn i {
  color: #204ae2;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.nav.visible {
  transform: translateX(0);
}

.nav-black {
  background-color: rgb(34,31,31);
  width: 60%;
  max-width: 480px;
  min-width: 320px;
  transition-delay: 0.4s;
}

.nav-red {
  background-color: #204ae2;
  width: 95%;
}

.nav-white {
  background-color: #ffff;
  width: 95%;
  padding: 40px;
  position: relative;
}

.close-btn {
  opacity: 0.3;
  position: absolute;
  top: 40px;
  right: 30px;
}

.list {
  list-style-type: none;
  padding: 0;
}

.list li {
  margin: 20px 0;
}

.list li a {
  color: rgb(34,31,31);
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
}

.list ul {
  list-style-type: none;
  padding-left: 20px;
}
.content {
  display: flex;
  align-items: center;
}
header {
  background: #f1f1f1;
  padding: 18px;
}
.content h2 {
  font-size: 24px;
  margin: 0 50px;
  font-weight: 500;
  color: #939292;
}
.content h2:hover {
  color: #232020;
  transition: .2s ease-in-out;
  cursor: pointer;
}
</style>