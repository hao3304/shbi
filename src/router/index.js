import Vue from 'vue'
import Router from 'vue-router'
import MailIndex from '@/components/MailIndex'
import MailArea from '@/components/MailArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mail-index',
      component: MailIndex
    },
    {
      path: '/area',
      name: 'mail-area',
      component: MailArea
    }
  ]
})
