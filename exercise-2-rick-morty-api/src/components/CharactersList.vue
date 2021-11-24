<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5">
    <li v-for="character in characters" :key="character.id">
      <character-item :character="character"></character-item>
    </li>
  </ul>
</template>

<script>
/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 24, 2021
 */
import {useStore} from 'vuex';
import {computed} from 'vue'

import CharacterItem from './CharacterItem.vue'

export default {
  name: 'CharacterList',
  components: {CharacterItem},
  setup(){
    const store = useStore();

    const characters = computed(() => store.state.characters);

    return {
      characters,
    };
  }
};
</script>

<style></style>
