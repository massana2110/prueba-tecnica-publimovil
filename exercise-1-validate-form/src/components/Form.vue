<template>
  <section>
    <div id="user-icon" class="bg-gradient-purple">
      <img src="../assets/images/user.svg" alt="user-icon" />
    </div>
    <div id="form">
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
.bg-gradient-purple {
  background: #da4453;
  background: -webkit-linear-gradient(to left, #89216b, #da4453);
  background: linear-gradient(to left, #89216b, #da4453);
}
</style>
