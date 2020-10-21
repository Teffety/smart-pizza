<template>
    <div class="basket-order">
      <h3> All summ : {{allSumm}}</h3>
      <h3> Products: {{countPrice}}</h3>
      <template v-if="baskets.length">
        <button  @click.prevent="buy">Buy</button> |
        <button  @click.prevent="clear"> Clear </button>
      </template>
    </div>
</template>
<script>
export default {
  props:
  {
    baskets:{
      type: Array
    } 
  },
  computed:
  {
    // подсчет суммы, скидка действует только на 1 пиццу( у каждрой пицци свои скидка )
    allSumm(){
      let state = this.baskets;
      let data = 0;
      for (let index = 0; index < state.length; index++) {
        const el = state[index];
        if( el.count === 0)
          continue;
        if( el.discont === 0)
          data += el.count > 1 ? ( +el.count * +el.price) : +el.price
        else 
          data += ((100 - +el.discont) * ( +el.count * +el.price) / 100) 
      }
      return data
    },
    // считаем колличество одной пиццы и сколько будут должны
    countPrice(){
      let state = this.baskets;
      let data = 0;
      for (let index = 0; index < state.length; index++) {
        const el = state[index];
        data += +el.count;
      }
      return data
    }
  },
  methods:
  {
    // если купили
    buy()
    {
      alert(`Y wiil bought on ${this.allSumm}`);
    },
    // rmdir
    clear()
    {
      this.$store.dispatch('catalog/clearCatalogs')
    }
  }
}
</script>