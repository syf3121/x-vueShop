import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/pages/GoodList'
import Cart from '@/pages/Cart'
import Address from '@/pages/Address'
import OrderConfirm from '@/pages/OrderConfirm'
import OrderSuccess from '@/pages/OrderSuccess'

Vue.use(Router)

export default new Router({

  // mode: 'hisstory',
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: GoodList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderconfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/ordersuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '*',
      name: 'GoodList',
      component: GoodList
    }
  ]
})
