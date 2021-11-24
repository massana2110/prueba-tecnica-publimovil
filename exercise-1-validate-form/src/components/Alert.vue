<template>
  <div
    :class="[
      type === 'error'
        ? 'bg-red-600 text-red-200'
        : 'bg-green-600 text-green-200',
    ]"
    class="flex justify-between shadow-inner rounded p-3 w-full sm:w-4/5 md:w-1/2"
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

<style scoped></style>
