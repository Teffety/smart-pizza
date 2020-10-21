<template>
  <div class="catalog">
    <!-- шапка -->
    <h1>Pizza</h1>

    <!-- фильтр -->
    <div class="catalog-filter">
      <p class="catalog-filter-clear" @click="clear"> Clear filters </p>
      <input type="text" v-model="searchText" class="catalog-input" placeholder="Searching">
      <div class="catalog-svg" @click="toggle">
        <svg 
          width="10px" 
          height="7px" 
          viewbox="0 0 10 7"
          :class="{'catalog-rotate': isToggle, 'catalog-fill__active': typeof isToggle === 'boolean'}" 
        >
          <path d="M0.414572 1.65079L4.24035 6.1142C4.59977 6.53353 5.23107 6.58209 5.6504 6.22267C5.68928 6.18934 5.72554 6.15308 5.75886 6.1142L9.58464 1.65079C9.94407 1.23147 9.8955 0.600166 9.47618 0.240743C9.29494 0.0853922 9.0641 0 8.82539 0L1.17383 0C0.621543 0 0.173828 0.447715 0.173828 1C0.173828 1.23871 0.25922 1.46955 0.414572 1.65079Z"/>
        </svg>
        <p class="catalog-toggle">
          {{ isToggle ? 'Decrease' : 'Increase'}} summ
        </p>
      </div>
    </div>
    <!-- тело  с картачками пиццы -->
    <div class="catalog-list" v-if="filtersCatalogs.length > 0">
      <Card v-for="item in filtersCatalogs" :key="item.id"  :item="item"/>
    </div>
    <div v-else>
      Catalog list is empty
    </div>
  </div>
</template>
<script>
import Card from '../components/Card'
export default {
  name:'Catalog',
  components:
  {
    Card
  },
  data()
  {
    return {
      isToggle: null,
      searchText:''
    }
  },
  computed:
  {
    catalogs()
    {
      return this.$store.state['catalog'].catalogs
    },
    // здесь фильтр отрабатывает
    filtersCatalogs(){
      let data = this.catalogs.filter( el =>  el.info.toLowerCase().includes(this.searchText.toLowerCase()))
      if (this.isToggle === null )
        return data
      
      return this.isToggle ? data.sort( (curr, next ) => curr.price > next.price ) : data.sort( (curr, next )=> curr.price < next.price)
    }
  },
  methods:{
    // обычный тогл для фильтра по ценам
    toggle()
    {
      this.isToggle = this.isToggle === null ? true : !this.isToggle
    },
    // это чистит фильтр
    clear()
    {
      this.isToggle = null;
      this.searchText = ''
    }
  }
}
</script>