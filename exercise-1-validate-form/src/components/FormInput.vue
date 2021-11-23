<template>
  <div id="form-input" class="flex flex-col">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="value"
      :name="name"
      v-validate="validate"
      @input="onInput"
    />
    <span v-show="errors.has(name)" class="text-red-600">
      {{ errors.first(name) }}
    </span>
  </div>
</template>

<script>
/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 23, 2021
 */
export default {
  name: 'FormInput',
  inject: ['$validator'],
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
    name: {
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
    validate: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$validator = this.$parent.$validator;
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped></style>
