<template>
  <div class="hello">
    <div class="kakaologin">
      <a class="kakaoa" @click="kakaoLogin()">
      <img class="kakaoimg" src="../assets/kakao_login_medium_narrow.png" style="max-width: 30%; height: auto;">
      </a>
    </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginMain',
  methods:{
    kakaoLogin(){
      
      console.log(window.Kakao)
      window.Kakao.Auth.login({
          scope:'profile_nickname,account_email',
          success:this.getKakaoAccount,
      });
    },
    getKakaoAccount(){
      window.Kakao.API.request({
        url:'/v2/user/me',
        success:res=>{
          const kakao_account=res.kakao_account;
          const nickname=res.properties.nickname;
          const email=kakao_account.email;
          console.log("nickname",nickname);
          console.log('email',email);
          axios.get(this._baseUrl + "login", {
              params : {
                nickname : nickname,
                email : email
              }
            })
              .then(result=> {
                console.log(result.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          
        },
        fail : error=>{
          console.log(error);
        }
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>