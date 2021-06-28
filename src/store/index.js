import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    gw2_AllDaily:{},
    count:0

  },
  mutations: {
    addAllDaily: (state, daily) => {
      state.gw2_AllDaily = daily
    }
  },
  actions: {
    getGW2AllDaily: (context) => {
      axios.get('https://api.guildwars2.com/v2/achievements/daily')
      .then((response) => {
        context.commit('addAllDaily', response.data)
      })
    }
  },
  modules: {
  },
  getters: {
    getAllDaily: (state) => {
      return state.gw2_AllDaily
    },
    getCount: (state) => {
      return state.count
    }
  }
})
