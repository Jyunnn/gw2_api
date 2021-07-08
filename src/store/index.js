import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    gw2_AllDaily:{},

  },
  mutations: {
    addGW2AllDaily: (state, daily) => {
      state.gw2_AllDaily = daily
    }
  },
  actions: {
    getGW2AllDaily: (context) => {
      return axios.get('https://api.guildwars2.com/v2/achievements/daily')
      .then((response) => {
        context.commit('addGW2AllDaily', response.data)
        return response.data
      })
    }
  },
  modules: {
  },
  getters: {
    getAllDaily: (state) => {
      return state.gw2_AllDaily
    },
  }
})
