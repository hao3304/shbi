// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './Login'
import router from './router'
import IView from 'iview'
import stash from 'vue-stash'
import './module/filter'
import store from './store';
import './module/common'
import VueLocalStorage from 'vue-ls';

import 'iview/dist/styles/iview.css';
require('../static/css/style.less');

Vue.use(IView)
Vue.use(stash)
Vue.config.productionTip = false
Vue.use(VueLocalStorage, {
  namespace: 'mail__'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    store
  },
  router,
  template: `
    <App v-if="store.login" />
    <Login v-else></Login>
  `,
  created(){
    let token = this.$ls.get('token');
    if(token) {
      store.token = token;
      store.login = true;
      store.username =  this.$ls.get('username');
      store.userId =  this.$ls.get('userId');
      store.admin =  store.username == "admin";
    }
  },
  components: { App,Login }
})
