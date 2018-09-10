import Vue from 'vue'
import Router from 'vue-router'
import MailIndex from '@/components/MailIndex'
import MailArea from '@/components/MailContrast'
import MailConfig from '@/components/MailConfig'
import SearchRecord from '@/components/SearchRecord'
import SearchMail from '@/components/SearchMail'
import MailCmd from '@/components/MailCmd'
import USerConfig from '@/components/UserConfig'
import Top from '@/components/Top'
import GeoTop from '@/components/GeoTop'
import Ip from '@/components/IpConfig'

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
      path: '/config_mail',
      name: 'config-mail',
      component: MailCmd
    },
    {
      path: '/config_user',
      name: 'config-user',
      component: USerConfig
    },
    {
      path: '/config_ip',
      name: 'config-ip',
      component: Ip
    },
    {
      path: '/search_top',
      name: 'search-top',
      component: Top
    },
    {
      path: '/search_geo',
      name: 'search-geo',
      component: GeoTop
    }
  ]
})
