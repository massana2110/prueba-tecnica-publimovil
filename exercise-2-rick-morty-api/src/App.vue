<template>
  <div id="app" class="w-screen h-screen overflow-auto bg-black">
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
      <character-list></character-list>
    </main>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {onMounted} from 'vue';
import CharacterList from './components/CharactersList.vue'

export default {
  name: 'App',
  components: {CharacterList},
  setup() {
    const store = useStore();

    onMounted(() => {
      console.log('On Mounted');
      store.dispatch('getRandomCharacters');
    });

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
</style>
