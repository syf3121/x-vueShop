// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import apiConfig from '../config/api.config'
Vue.use(VueAxios,Axios)
Axios.defaults.baseURL = apiConfig.baseUrl

import VueLazyload from 'vue-lazyload'
import VueInfiniteScroll from 'vue-infinite-scroll'

Vue.use(VueInfiniteScroll)
Vue.use(VueLazyload, {
  loading: "static/loading-svg/loading-bars.svg",
  try: 3
})
import {currency} from './util/currency'
Vue.filter('currency',currency)

import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
