<template>
  <div class="order">
    <!-- шапка -->
    <div class="order-img" :style="{ backgroundImage: `url('${block.img}')`}">
    </div>
    <!-- описание -->
    <div class="order-info">
      <div class="order-discription">
        {{block.info ? block.info : 'No description'}}
      </div>
      <!-- ценновое инфо -->
      <div class="order-data">
        <p class="order-price">
          Price: {{ !block.discont ? price : discontPrice }}
        </p>
        <p class="order-price" v-if="block.discont">
          Discont: {{  block.discont }} %
        </p>
        <p class="order-price order-price-all">
          All price: 
          {{ block.count > 1 ? (+block.price * block.count) : block.price}}
        </p>
      </div>
      <!-- кнопочки уравления и удаления -->
      <div class="order-actions">  
        <div class="order-actions">
          <p class="order-actions__btns" @click="addToBasket">+</p>
          <span class="order-actions__count"> {{ block.count }} </span>
          <p class="order-actions__btns" @click="removeFromBasket">-</p>
        </div>
          <span class="order-trash" @click="remove">
            <!-- такое же svg и у корзины около кнопок -->
            <svg viewBox='0 0 9.33 12'>
              <path d="M.67 10.67A1.34 1.34 0 0 0 2 12h5.33a1.34 1.34 0 0 0 1.34-1.33v-8h-8zm8.66-10H7L6.33 0H3l-.67.67H0V2h9.33z"></path>
            </svg>
          </span>
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
      let count = this.block.count || 1
      return  ((this.hPercent - +this.block.discont) * ( +count * +this.block.price) / this.hPercent) 
    }
  },
  methods:
  {
    addToBasket()
    {
      if( this.block.count === this.maxAddings )
        return
      this.block.count+=1
      this.$store.dispatch('catalog/incrementCount', this.block )
    },
    removeFromBasket()
    {
      this.block.count-=1
      this.$store.dispatch('catalog/decrementCount', this.block )
    },
    remove()
    {
      this.$store.dispatch('catalog/removeFromBasket', this.block )
    }
  }
}
</script>