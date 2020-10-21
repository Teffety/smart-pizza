import Vue from 'vue';
import Vuex from 'vuex';
import basket from './Basket'
import catalog from './Catalog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basket,
    catalog
  }
})
