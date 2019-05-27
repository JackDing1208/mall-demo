import Vue from 'vue'
import Vuex from 'vuex'
import Address from 'js/addressService'
Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    list: null
  },
  mutations: {
    setList(state,list){
      state.list=list
    }
  },
  actions:{
    requestList(context){
      Address.list().then(res => {
        context.commit('setList',res.data.lists)
      })
    }
  },
  getters:{
    getList(state){
      return state.list
    }
  }
})


export default store
