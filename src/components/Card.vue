<template>
  <div class="card">
    <!-- шапка с картинкой -->
    <div class="card-img" :style="{ backgroundImage: `url('${block.img}')`}" />
    <!-- состав / описание -->
    <div class="card-discription" :class="{'card-empty' : !block.info}">
      <span class="card-text">
        {{block.info ? block.info : 'No description'}}
      </span>
    </div>
    <!-- ценник -->
    <div class="card-data" :class="{'card-discont':block.discont}">
      <p class="card-price" >
        Price: 
          {{ block.discont == 0 ? price : discontPrice }}
      </p>
      <!-- кнопчка для работы с корзиной -->
      <div class="card-actions">
        <template v-if="block.count > 0">
          <p class="card-actions__btns" @click="addToBasket">+</p>
          <span class="card-actions__count"> {{ block.count }} </span>
          <p class="card-actions__btns" @click="removeFromBasket">-</p>
        </template>

        <button v-else @click.prevent="addToBasket" > Add pizza</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    item: {
      type: Object
    }
  },
  data()
  {
    return {
      block: {},
      hPercent: 100,
      maxAddings: 20,
    }
  },

  mounted()
  {
    this.block = JSON.parse(JSON.stringify(this.item))
  },
  watch:
  {
    item()
    {
      this.block = JSON.parse(JSON.stringify(this.item))
    }
  },
  computed:
  {
    price()
    {
      return this.block.count > 1 ? (+this.block.price * this.block.count) : this.block.price
    },
    discontPrice()
    {
      let count = this.block.count || 1;
      let summ = ((this.hPercent - +this.block.discont) * ( +count * +this.block.price) / this.hPercent) 
      return `${summ}` 
    }
  },
  methods:
  {
    // увеличиваем счетчик и добавляем в корзину
    addToBasket()
    {
      if( this.block.count === this.maxAddings )
        return
      this.block.count+=1
      this.$store.dispatch('catalog/incrementCount', this.block )
    },
    // уменьшем счетчик и добавляем в корзину
    removeFromBasket()
    {
      this.block.count-=1
      this.$store.dispatch('catalog/decrementCount', this.block )
    }
  }
}
</script>