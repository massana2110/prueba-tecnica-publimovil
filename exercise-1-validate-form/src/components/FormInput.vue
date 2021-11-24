<template>
  <div id="form-input" class="flex flex-col mb-5">
    <label class="font-bold text-gray-600 text-sm sm:text-md mb-1" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="value"
      :name="name"
      v-validate="validate || phoneValidate"
      @input="onInput"
      class="bg-gray-100 outline-none py-3 px-2 rounded-lg"
    />
    <span v-show="errors.has(name)" class="text-red-600 text-xs mt-2">
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
