export default {
  namespaced: true,
  state:
  {
    basket: []
  },
  actions:
  {
    // добавляем в корзинку
    addToBasket( { commit, state }, props )
    {
      let arr = state.basket;
      if( !arr.some ( el => el.id === props.id ))
        arr.push(props)
      else
        arr = arr.map( el => {
          return el.id === props.id ? props : el;
        })
        
      commit( 'setData', { path: 'basket', value: arr});
    },
    // удаляем корзинки
    removeFromBasket( { commit, state }, props )
    {
      let arr = state.basket;
      if( props.count >= 1)
        arr = arr.map( el => {
          return el.id === props.id ? props : el;
        })
      else
        arr = arr.filter( el=> el.id !== props.id);

      commit( 'setData', { path: 'basket', value: arr })
    },
    // удаляем 1 пиццу из корзинки
    removeItemFromBasket( { commit, state }, props )
    {
      let  arr = state.basket
      arr = arr.filter( el => el.id !== props.id)
      commit( 'setData', { path: 'basket', value: arr })
    },
    // чистми корзинку
    clearBasket({ commit })
    { 
      commit( 'setData', { path: 'basket', value: [] })
    }
  },
  mutations:
  {
    //скучный метод работы с базой
    setData( state, { path, value })
    {
      state[path] = JSON.parse(JSON.stringify(value))
    }
  },
}