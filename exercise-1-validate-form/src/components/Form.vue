<template>
  <section class="flex flex-col justify-center items-center w-4/5 sm:w-9/12">
    <div
      id="user-icon"
      class="bg-gradient-purple p-8 w-16 rounded-full relative"
    >
      <img
        class="w-8 absolute top-1/4 left-1/4"
        src="../assets/images/user.svg"
        alt="user-icon"
      />
    </div>
    <div id="form" class="w-full bg-white shadow-lg p-10 -m-7 rounded">
      <form-input
        :id="'NameInput'"
        :type="'text'"
        :label="'Name'"
        v-model="frmName"
      ></form-input>

      <form-input
        :id="'EmailInput'"
        :type="'email'"
        :label="'Email'"
        v-model="frmEmail"
      ></form-input>

      <form-input
        :id="'PhoneInput'"
        :type="'text'"
        :label="'Phone Number'"
        v-model="frmPhoneNumber"
      ></form-input>

      <button class="submit-btn w-2/3 rounded-full mx-auto block py-3 text-white mt-4">Submit</button>
    </div>
  </section>
</template>

<script>
/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 23, 2021
 */
import FormInput from '@/components/FormInput';

export default {
  name: 'Form',
  components: {FormInput},
  data: () => ({
    frmName: '',
    frmEmail: '',
    frmPhoneNumber: '',
  }),
};
</script>

<style scoped>
.bg-gradient-purple, .submit-btn {
  background: #da4453;
  background: -webkit-linear-gradient(to left, #89216b, #da4453);
  background: linear-gradient(to left, #89216b, #da4453);
}
</style>
