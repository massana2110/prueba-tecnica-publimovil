<template>
  <section
    class="flex flex-col justify-center items-center w-4/5 sm:w-9/12 max-w-lg"
  >
    <alert v-if="alert" :type="alertType" :message="alertMessage"></alert>

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
        :name="'name'"
        :validate="'required'"
        v-model="frmName"
      ></form-input>

      <form-input
        :id="'EmailInput'"
        :type="'email'"
        :label="'Email'"
        :name="'email'"
        :validate="'required|email'"
        v-model="frmEmail"
      ></form-input>

      <form-input
        :id="'PhoneInput'"
        :type="'text'"
        :label="'Phone Number'"
        :name="'phone'"
        :validate="'required'"
        v-model="frmPhoneNumber"
      ></form-input>

      <button
        class="
          submit-btn
          w-2/3
          sm:w-2/4
          rounded-full
          mx-auto
          block
          py-3
          text-white
          mt-4
        "
        @click="submitData"
      >
        {{ btnLabel }}
      </button>
    </div>
  </section>
</template>

<script>
/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 23, 2021
 */
import FormInput from '@/components/FormInput';
import Alert from '@/components/Alert.vue';
import {mapActions, mapState} from 'vuex';

export default {
  name: 'Form',
  components: {FormInput, Alert},
  data: () => ({
    frmName: '',
    frmEmail: '',
    frmPhoneNumber: '',
    btnLabel: 'Submit',

    alert: false,
    alertType: '',
    alertMessage: '',
  }),
  computed: {
    ...mapState(['success']),
  },
  inject: ['$validator'],
  methods: {
    ...mapActions(['sendData']),
    submitData() {
      this.$validator.validate().then(async (valid) => {
        console.log('Validating...');

        if (!valid) {
          this.configAlert(false)
          return;
        } else {
          this.btnLabel = 'Guardando...';

          const data = {
            name: this.frmName,
            email: this.frmEmail,
            phone: this.frmPhoneNumber,
          };

          await this.sendData(data);

          this.configAlert(true);

          this.btnLabel = 'Submit';
        }
      });
    },

    configAlert(flag) {
      if (flag) {
        // on api responses
        if (this.success) {
          this.alertType = 'success';
          this.alertMessage = 'User saved succesfully';
        } else {
          this.alertType = 'error';
          this.alertMessage = 'There was an issue on saving user.';
        }
      } else {
        // on no valid input fields
        this.alertType = 'error'
        this.alertMessage = 'There are errors on input fields'
      }

      this.alert = true;

      setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.bg-gradient-purple,
.submit-btn {
  background: #da4453;
  background: -webkit-linear-gradient(to left, #89216b, #da4453);
  background: linear-gradient(to left, #89216b, #da4453);
}
</style>
