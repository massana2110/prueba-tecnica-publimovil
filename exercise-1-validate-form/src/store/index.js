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
    currentUser: {},
  },
  actions: {
    // Send user data to API
    async sendData({commit}, payload) {
      try {
        const headers = {
          Authorization: `Bearer ${PERSONAL_TOKEN}`,
          'Content-Type': 'application/json',
        };

        const res = await axios.post(API_URL, payload, {headers});

        console.log(res);

        commit('setCurrentUser', payload)

      } catch (error) {
        console.error(error)
      }
    },
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
});

export default store;
