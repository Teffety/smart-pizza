<template>
  <div id="app">
    <div id="nav">
      <router-link to="/catalog">Catalog</router-link> |
      <router-link to="/basket">
        Basket
        <!-- когда экономишь время получешь пример нижу -->
        <span class="basket-trash">
          <!-- чтобы цвет у корзины менялся, и да это корзина, 
          и да корзина и удаление умеет одну и ту же иконку.
          Знак корзины специально исчезает из шапки. это не баг, исправить можно 
          вот тут /src/styles/_var.sass 31 строка
          -->

          <svg :class="{'active':countPrice > 0}" viewBox='0 0 9.33 12'>
            <path d="M.67 10.67A1.34 1.34 0 0 0 2 12h5.33a1.34 1.34 0 0 0 1.34-1.33v-8h-8zm8.66-10H7L6.33 0H3l-.67.67H0V2h9.33z"></path>
          </svg>
          <!-- вот здесь колличетсво товаров в корзине -->
          <span class="basket-trash-span">
            {{ countPrice }}
          </span>
        </span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed:
  {
    // чтобы цифорки колличества товаров выводить
    countPrice(){
      let state = this.$store.state.basket.basket;
      let data = 0;
      
      for (let index = 0; index < state.length; index++) {
        const el = state[index];
        data += +el.count;
      }
      return data
    }
  }
}
</script>
