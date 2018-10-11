import Vue from 'vue'
import Router from 'vue-router'
import BannerList from '@/pages/BannerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BannerList',
      component: BannerList
    }
  ]
})
