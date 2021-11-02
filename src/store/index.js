import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    userData: {},
    products: [],
    product: {},
    cart: []
  },
  mutations: {
    setUserData(state, val) {
      state.userData = val
    },
    
  },
  getters: {
    user(state) {
      return state.userData
    },
    products(state) {
      return state.products
    },
    product(state) {
      return state.product
    },
    cart(state) {
      return state.cart
    }
  },
  actions: {
    login({ commit }) {
      const url = 'https://randomuser.me/api'
      axios.get(url).then(res => {
        const userData = {
          displayName: res.data.result[0].name.first,
          email: res.data.result[0].email,
          photoURL: res.data.result[0].picture.thumbnail,
          uid: res.data.result[0].login.uuid,
        }
        commit('setUserData', userData)
      }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
