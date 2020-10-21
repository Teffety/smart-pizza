<template>
  <div class="basket">
    <!-- шапка -->
    <h1>Order list</h1>
    <!-- окно для заказа -->
    <Modal :baskets="baskets"/>
    <!-- тело с пиццами -->
    <div class="basket-list" v-if="baskets.length > 0">
      <Order v-for="item in baskets" :key="item.id"  :item="item"/>
    </div>
    <div v-else>
      Order list is empty
    </div>
  </div>
</template>

<script>
import Order from '../components/Order';
import Modal from '../components/Modal';

export default {
  name: 'Basket',
  components: {
    Order,
    Modal
  },
  computed:
  {
    baskets()
    {
      return this.$store.state.basket.basket
    },
  },
}
</script>
