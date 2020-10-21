import Axios from 'axios';

export default {
  namespaced: true,
  state:
  {
    catalogs:[
      {
        id: 1,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 1111,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 2,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 103040,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 3,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 1,
        count:0,
        discont:20,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
      },
      {
        id: 4,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 2,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 5,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 1000,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 6,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 1000,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 7,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 2000,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 8,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 400,
        count:0,
        discont:0,
        info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam perferendis perspiciatis sed, blanditiis suscipit quidem consectetur hic odio mollitia atque ipsam incidunt error? Esse dolorum porro exercitationem a nihil?'
      },
      {
        id: 9,
        img: 'https://static.pizzasushiwok.ru/images/menu_new/588-1300.jpg',
        price: 10000,
        count:0,
        discont:0,
        info:''
      },
    ]
  },
  actions:
  {
    // увеличивает колличество пиццы
    incrementCount( {commit , dispatch, state }, props)
    {
      let arr = state.catalogs
      arr = arr.map( el=> {
        if( el.id === props.id )
          return props
        return el
      })
      commit('setData', { path:'catalogs', value: arr })
      dispatch('basket/addToBasket', props, { root: true } )
    },
    // уменьшает колличество пиццы
    decrementCount( {commit , dispatch, state }, props)
    {
      let arr = state.catalogs
      arr = arr.map( el=> {
        if( el.id === props.id )
          return props
        return el
      })
      commit('setData', { path:'catalogs', value: arr })
      dispatch('basket/removeFromBasket', props, { root: true } )
    },
    // сводит на 0 колличество пиццы
    clearCatalogs( { commit, state, dispatch })
    {
      let  arr = state.catalogs
      arr = arr.map( el => ({ ...el, count: 0}))
      dispatch('basket/clearBasket', null, {root: true})
      commit('setData', { path:'catalogs', value: arr })
    },
    // сводит на 0 колличество пиццы и удаляет из корзины
    removeFromBasket( {commit, state, dispatch}, props)
    {
      let  arr = state.catalogs
      arr = arr.map( el => {
        if ( el.id === props.id)
          el.count = 0
        return el
      })
      dispatch('basket/removeItemFromBasket', props, {root: true})
      commit('setData', { path:'catalogs', value: arr })
    }
  },
  mutations:
  {
    //скучный метод работы с базой
    setData(state, { path, value})
    {
      state[ path ] = JSON.parse(JSON.stringify( value ));
    }
  }
}