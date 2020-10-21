import Vue from 'vue'
import VueRouter from 'vue-router'
import components from './components'

Vue.use(VueRouter)

const routes = components.map( el => 
  {
    
    let str = el[0].toUpperCase() + el.slice(1)
    return  {
      path: `/${el}`,
      name: str,
      component: () => import(`../views/${str}`)
    }
  }
)
routes.push( 
  {
    path: '*',
    component: () => import('../views/Error')
  }
)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
