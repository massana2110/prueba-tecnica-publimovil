<template>
  <div id="app" class="w-screen h-screen flex justify-center items-center bg-blue-50">
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
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



</style>
