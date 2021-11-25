/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 23, 2021
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = 'https://prize.manager.orangesoftco.com/api';
const PERSONAL_TOKEN = process.env.VUE_APP_API_TOKEN || ''; // add token here

const store = new Vuex.Store({
  state: {
    success: false,
  },
  actions: {
    // Send user data to API
    async sendData({commit}, payload) {
      try {
        const headers = {
          Authorization: `${PERSONAL_TOKEN}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        };

        const {data, status} = await axios.post(`${API_URL}/v1/players`, payload, {headers});

        console.log(data.message);

        if(status === 200) commit('setSuccess', true)

      } catch (error) {
        console.error(error)
        commit('setSuccess', false)
      }
    },
  },
  mutations: {
    setSuccess(state, flag) {
      state.success = flag;
    },
  },
});

export default store;
