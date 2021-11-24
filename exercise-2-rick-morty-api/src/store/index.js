import {createStore} from 'vuex';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

// Random number between max characters (826) and first character
const randomNumber = () => Math.floor(Math.random() * (826 - 1) + 1);

const store = createStore({
  state: {
    characters: [],
    success: false,
  },
  actions: {
    // get characters
    async getRandomCharacters({commit}) {
      const maxCharacters = 6;
      const idCharacters = [];

      try {
        // Set random characters id
        for (let index = 1; index <= maxCharacters; index++) {
          idCharacters.push(randomNumber());
        }

        const response = await axios.get(
          `${API_URL}/character/${idCharacters.join()}`
        );

        commit('setCharacters', response.data)
        commit('setSuccess', true)

      } catch (error) {
        console.error('There was an error fetching data: ', error);
        commit('setSuccess', false)
      }
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setSuccess(state, flag){
        state.success = flag
    }
  },
  getters: {},
});

export default store;
