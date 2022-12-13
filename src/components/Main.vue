<template>
 <div class="container">
   <div class="menu">
     <ul class="main-menu">
       <li class="list_1">{{ ours }}</li>
       <li class="list_2">{{ contact }}</li>
     </ul>
     <div class="border-bottom"></div>
   </div>
   <div class="content">
     <div class="text-wrapper">
        <ul v-for="date in data" :key="date.id" class="ul-wrapper">
          <li>{{ date.list }}</li>
        </ul>
     </div>
     <div class="btn-wrapper">
       <button type="button" class="btn">{{ value }}</button>
       <button type="button" class="btn">{{ value }}</button>
       <button type="button" class="btn">{{ ogn_tedxt }}</button>
       <button type="button" class="btn">{{ passport }}</button>
       <button type="button" class="btn">{{ value }}</button>
     </div>
   </div>
   <div class="wrap">
     <div class="content-wrap">
       <h2>{{ payment }}</h2>
       <button class="payment_btn">{{ payment_btn }}</button>
     </div>
     <div class="content-wrap">
       <h2>{{ price }}</h2>
       <button class="price_btn">{{ price_btn }}</button>
     </div>
     <div class="content-wrap">
       <h2>{{ summ }}</h2>
       <button class="summ_btn">{{ summ_btn }}</button>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "vMain",
  data() {
    return {
      ours: 'Общие данные',
      contact: 'Контакт',
      value: 'Value',
      ogn_tedxt: 'ОГРН.png, ИНН.png',
      passport: 'Паспорт.png, Паспорт.png, Паспорт.png',
      payment: 'Условия оплаты',
      payment_btn: 'Постоплата',
      price: 'оличество дней',
      price_btn: '10',
      summ: 'Сумма кредита',
      summ_btn: '10000',
      data: [
        {
          id: 1,
          list: 'Представление'
        },
        {
          id: 2,
          list: 'Юридические название'
        },
        {
          id: 3,
          list: 'Свидетельство  ОГРН, ИНН'
        },
        {
          id: 4,
          list: 'Паспорта ИП, учредителя, ген.директора'
        },
        {
          id: 5,
          list: 'Фактический адрес склада'
        },
      ],
    }
  },
  mounted() {
    let list = document.querySelectorAll('.main-menu li')
    let list_1 = document.querySelector('.list_1')
    let list_2 = document.querySelector('.list_2')
    let border_bottom = document.querySelector('.border-bottom')


    list_1.classList.add('active')
    list.forEach((e) => {
      e.addEventListener('click' && 'mouseover', () => {
        list.forEach((e) => {
          e.classList.remove('active')
        })
        e.classList.add('active')
      });

      e.addEventListener('mouseout', () => {
        list_1.classList.add('active')
        e.classList.remove('active')
        border_bottom.classList.add('active_bottom')
      });
    });

    list_1.addEventListener('click' && 'mouseover', (e) => {
      e.preventDefault()
      border_bottom.classList.remove('active-border-bottom')
      border_bottom.classList.add('active_bottom')
      list_1.classList.add('active')
    });

    list_2.addEventListener('click' && 'mouseover', (e) => {
      e.preventDefault()
      border_bottom.classList.remove('active_bottom')
      border_bottom.classList.add('active-border-bottom')
    });

    list_1.addEventListener('mouseout', () => {
      list_1.classList.add('active')
    })
 }
}
</script>

<style scoped>
  .main-menu li {
    color: #4c4b4b;
    font-size: 18px;
    width: fit-content;
    margin: 0 40px 0 0;
    border-right-width: 10px;
  }
  .ul-wrapper li:hover, .content-wrap h2:hover {
    color: #232020;
    transition: .2s ease-in-out;
    cursor: pointer;
  }
  .main-menu {
    display: flex;
    margin: 30px 0;
  }
  .active-border-bottom {
    transition: .2s ease-in-out;
    transform: translateX(182px) translateY(-20px)!important;
  }
  .active {
    color: #204ae2 !important;
    transition: .2s ease-in-out;
  }
  .active_bottom {
    transition: .2s ease-in-out;
    transform: translateX(50px) translateY(-20px)!important;
  }
  li {
    list-style-type: none;
    cursor: pointer;
  }
  .border-bottom {
    border-top: 2px solid #204ae2;
    height: 1px;
    width: 33px;
    transform: translateY(-20px) translateX(50px);
    text-align: center;
  }
  .ul-wrapper li {
    font-size: 18px;
    color: #7d7a7a;
    line-height: 60px;
  }
  .btn-wrapper {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .btn-wrapper button {
    width: 200px;
    height: 40px;
    text-align: start;
    padding: 3px 7px;
    font-weight: 500;
    background: #eee;
    color: #031928;
    font-size: 17px;
    border: none;
    border-radius: 3px;
  }
  .btn-wrapper button:nth-child(4) {
    width: 330px!important;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .wrap {
    display: flex;
    align-items: center;
  }
  .content-wrap {
    display: flex;
    margin: 0 20px 0 0;
    align-items: center;
  }
  .content-wrap h2 {
    font-size: 18px;
    color: #7d7a7a;
    font-weight: 500;
  }
  .content-wrap button {
    height: 40px;
    padding: 3px 5px;
    font-weight: 500;
    background: #eee;
    color: #1d1919;
    border: none;
    font-size: 17px;
    border-radius: 3px;
    margin: 0 10px;
  }
  .payment_btn {
    width: 200px;
    text-align: start!important;
  }
  .price_btn {
    width: 50px;
  }
  .summ_btn {
    width: 80px;
  }
  @media(max-width: 500px) {
    .content {
      display: block;
    }
  }
</style>