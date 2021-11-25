<template>
  <div id="app" class="w-screen min-h-screen overflow-auto bg-hero">
    <header
      class="w-full flex justify-center pt-4 lg:justify-start lg:pl-4"
    >
      <img
        class="w-full max-w-xs sm:max-w-md"
        src="./assets/rick-morty-logo.png"
        alt="rick-morty-app"
      />
    </header>

    <main class="w-screen flex justify-center items-center">
      <loader v-if="loading"></loader>
      <character-list v-else></character-list>
    </main>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {onMounted, ref} from 'vue';
import CharacterList from './components/CharactersList.vue'
import Loader from './components/Loader.vue'

export default {
  name: 'App',
  components: {CharacterList, Loader},
  setup() {
    const store = useStore();
    const loading = ref(false);

    onMounted(() => {
      loading.value = true
      console.log('On Mounted');

      store.dispatch('getRandomCharacters').then(() => {
        loading.value = false
      })
    });

    return {
      loading
    }
  },
};
</script>

<style>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg-hero {
  background-image: url(./assets/rick-and-morty-wallpaper.jpg);
  background-position-y: 90%;
  background-position-x: center;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
