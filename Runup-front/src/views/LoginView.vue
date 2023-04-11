<template>
  <div class="home">
      <LoginInput></LoginInput>
      <LoginMain></LoginMain>
  </div>
</template>

<script>
import LoginMain from '@/components/LoginMain.vue'
import LoginInput from '../components/LoginInput.vue';

export default {
  name: 'LoginView',
  components: {
    LoginMain,
    LoginInput
  }
}
</script>

