import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containerComponents/Home/Home.vue'
import Class from '../containerComponents/Class/Class.vue'
import MyEpet from '../containerComponents/MyEpet/MyEpet.vue'
import ShopCart from '../containerComponents/ShopCart/ShopCart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/myEpet',
      component: MyEpet
    },
    {
      path: '/shopCart',
      component: ShopCart
    }
  ]
})
