<template>
  <div id="form-input" class="flex flex-col">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 23, 2021
 */
export default {
  name: 'FormInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped></style>
