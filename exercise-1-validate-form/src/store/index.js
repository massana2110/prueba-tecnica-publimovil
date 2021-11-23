import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: {},
  },
  actions: {
    // Send user data to API
  },
  mutations: {},
});

export default store;
