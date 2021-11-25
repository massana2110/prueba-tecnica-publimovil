<template>
  <div
    :class="[
      type === 'error'
        ? 'bg-red-600 text-red-200'
        : 'bg-green-600 text-green-200',
    ]"
    class="flex justify-center shadow-inner rounded p-3 mb-4 w-full"
  >
    <p class="self-center text-sm">{{ message }}</p>
  </div>
</template>

<script>
/**
 * Writen by David Massana <david.massana.10@gmail.com>
 * November 24, 2021
 */
export default {
  name: 'Alert',
  props: {
    type: String,
    message: String,
  },
};
</script>

<style scoped>
</style>
