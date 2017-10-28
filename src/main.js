// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import IView from 'iview'
import stash from 'vue-stash'
import './module/filter'
import store from './store';
import './module/common'

import 'iview/dist/styles/iview.css';
require('../static/css/style.less');

Vue.use(IView)
Vue.use(stash)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    store
  },
  router,
  template: '<App/>',
  components: { App }
})
