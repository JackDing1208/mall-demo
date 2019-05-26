import Vue from 'vue'
import Router from 'vue-router'
import member from '../components/member'
import address from '../components/address'
import all from '../components/allList'
import form from '../components/formList'


Vue.use(Router)


export default new Router({
  routes: [
    {path: '/', component: member},
    {path: '/address', component: address,
      children: [
        {path: '', redirect: 'all'},
        {path: 'all',name:'all', component: all},
        {path: 'form',name:'form', component: form}
      ]
    }
  ]
})
