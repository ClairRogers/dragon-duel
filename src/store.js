import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _api = Axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    activeDragon: {},
    champions: [],
    activeChampion: {},
    game: {}
  },
  mutations: {
    setDragons(state, data) {
      state.dragons = data
    },
    setActiveDragon(state, data) {
      state.activeDragon = data
    },
    setChampions(state, data) {
      state.champions = data
    },
    setActiveChampion(state, data) {
      state.activeChampion = data
    },
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    getDragons({ commit, dispatch }) {
      _api.get('dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
    },
    makeActiveDragon({ commit, dispatch }, payload) {
      commit('setActiveDragon', payload)
    },
    makeActiveChampion({ commit, dispatch }, payload) {
      commit('setActiveChampion', payload)
    },
    // getDragon({ commit, dispatch }, payload) {
    //   _api.get('dragon/' + payload)
    //     .then(res => {
    //       commit('setActiveDragon', res.data.data)
    //     })
    // },
    getChampions({ commit, dispatch }) {
      _api.get('champions')
        .then(res => {
          commit('setChampions', res.data)
        })
    },
    // getChampion({ commit, dispatch }, payload) {
    //   _api.get('champion/' + payload)
    //     .then(res => {
    //       commit('setActiveChampion', res.data.data)
    //     })
    // },
    getGame({ commit, dispatch }, payload) {
      _api.get('games/' + payload)
        .then(res => {
          commit('setGame', res.data)
          commit('activeChampion', res.data._champion)
          commit('activeDragon', res.data._dragon)
        })
    },
    attack({ commit, dispatch }, payload) {
      _api.put('games/' + payload._id, payload)
        .then(res => {
          commit('setGame', res.data)
        })
    },
    createGame({ commit, dispatch }, payload) {
      _api.post('games', payload)
        .then(res => {
          commit('setGame', res.data.game)
          commit('activeChampion', res.data.game._champion)
          commit('activeDragon', res.data.game._dragon)
          router.push({ name: 'Game', params: { id: res.data.game._id } })
        })
    }
  }
})
