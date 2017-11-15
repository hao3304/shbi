import Vue from 'vue'
import Router from 'vue-router'
import MailIndex from '@/components/MailIndex'
import MailArea from '@/components/MailContrast'
import MailConfig from '@/components/MailConfig'
import SearchRecord from '@/components/SearchRecord'
import SearchMail from '@/components/SearchMail'
import MailCmd from '@/components/MailCmd'

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
    },
    {
      path: '/search',
      name: 'search-record',
      component: SearchRecord
    },
    {
      path: '/search_email',
      name: 'search-email',
      component: SearchMail
    },
    {
      path: '/cmd',
      name: 'mail-cmd',
      component: MailCmd
    }
  ]
})
