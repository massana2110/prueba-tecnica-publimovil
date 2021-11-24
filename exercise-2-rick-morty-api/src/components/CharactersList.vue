<template>
  <div class="container flex justify-center items-center block absolute w-full">
    <ul
      class="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        w-full
      "
    >
      <li class="text-white">1</li>
      <li class="text-white">2</li>
      <li class="text-white">3</li>
      <li class="text-white">4</li>
      <li class="text-white">5</li>
      <li class="text-white">6</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CharacterList',
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
