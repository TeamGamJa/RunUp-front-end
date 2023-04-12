<template>
  <div class="home">
      <LoginInput></LoginInput>
      <LoginMain></LoginMain>
  </div>
</template>

<script>
import LoginKakao from '@/components/LoginKakao.vue'
import LoginInput from '../components/LoginInput.vue';

export default {
  name: 'LoginView',
  components: {
    LoginKakao,
    LoginInput
  }
}
</script>

