import Vue from 'vue'
import Router from 'vue-router'
import member from '../components/member'
import address from '../components/address'
import all from '../components/allList'
import form from '../components/form'


Vue.use(Router)


export default new Router({
  routes: [{
    path: '/',
    component: member
  }, {
    path: '/address',
    component: address,
    children: [{
      path: '',
      redirect: 'all'
    }, {
      path: 'all',
      component: all
    }, {
      path: 'form',
      component: form
    }]
  }]
})
