import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    username : localStorage.getItem('username') || ''
  },
  mutations: {
    auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, {token, username}){
        state.status = 'success'
        state.token = token
        state.username = username
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
  },
  actions: {
    login({commit}, user){
        
        /*let uri = 'http://localhost:4000/users/authenticate';
        console.log(user);
        this.axios.post(uri, this.user).then((response) => {
            console.log(response)
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('user-token',response.data.token)
        }).catch(err => console.log(err));*/

        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://localhost:4000/users/authenticate', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const username = resp.data.username
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', {token, username})
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          localStorage.removeItem('username')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
  },
  getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        username: state => state.username
  }
})