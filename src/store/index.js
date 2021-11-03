import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    userData: {},
    products: [],
    product: {},
    cart: [],
    uploadingData: {}
  },
  mutations: {
    setUserData(state, val) {
      state.userData = val
    },
    setProducts(state, val) {
      state.products = val
    },
    setProduct(state, val) {
      state.product = val
    },
    setLoad(state, val) {
      state.uploadingData = val
    },
    setCart(state, val) {
      state.cart = val
    }
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
    },
    getProducts({ commit }) {
      const url = 'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products'
      axios.get(url).then(res => {
        commit('setProducts', res.data)
      }).catch(err => console.log(err))
    },
    productDetails({ commit }, id) {
      const url = 'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products'
      axios.get(url, { params: { id: id } }).then(res => {
        commit('setProduct', res.data[0])
      }).catch(err => console.log(err))
    },
    addCart({ commit, getters }, payload) {
      const cart = getters.cart
      cart.push(payload)
      commit('setCart', cart)
    },
    removeCart({ commit, getters }, id) {
      const cart = []
      if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
          const element = getters.cart[index]
          if (element.id !== id) {
            cart.push(element)
          }

        }
      }
      commit('setCart', cart)
    }
  },
  modules: {
  }
})
