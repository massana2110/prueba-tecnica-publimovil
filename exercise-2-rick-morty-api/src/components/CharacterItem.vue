<template>
  <div class="card">
    <img :src="character.image" :alt="character.name">
    <p>{{character.name}}</p>
    <p><span></span> {{character.state}}</p>
    <small>Last known location</small>
    <p>{{character.lastLocation}}</p>
    <small>First seen in</small>
    <p>Primera vez visto</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterItem',
  props: {
    character: Object,
  },
};
</script>

<style scoped></style>
