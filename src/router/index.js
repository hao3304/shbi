import Vue from 'vue'
import Router from 'vue-router'
import MailIndex from '@/components/MailIndex'
import MailArea from '@/components/MailContrast'
import MailConfig from '@/components/MailConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mail-index',
      component: MailIndex
    },
    {
      path: '/contrast',
      name: 'mail-contrast',
      component: MailArea
    },
    {
      path: '/config',
      name: 'mail-config',
      component: MailConfig
    }
  ]
})
