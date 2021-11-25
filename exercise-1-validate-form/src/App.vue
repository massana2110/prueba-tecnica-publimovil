<template>
  <div id="app" class="w-screen min-h-screen overflow-y-auto flex justify-center items-center py-10 bg-blue-50">
    <Form></Form>
  </div>
</template>

<script>
/**
 * Written by David Massana <david.massana.10@gmail.com>
 * November 23, 2021
 */

// Component imports
import Form from '@/components/Form'

export default {
  name: 'App',
  components: {Form},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

</style>