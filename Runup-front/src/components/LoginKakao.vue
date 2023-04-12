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
  name: 'LoginKakao',
  methods:{
    kakaoLogin(){
      
      console.log(window.Kakao)
      window.Kakao.Auth.login({
          scope:'profile_nickname,account_email',
          success:this.getKakaoAccount,
      });
    },
    getKakaoAccount(){
      let tmp = this;
      window.Kakao.API.request({
        url:'/v2/user/me',
        success:res=>{
          const kakao_account=res.kakao_account;
          const userNickname=res.properties.nickname;
          const userId=kakao_account.email;
          axios.get(this._baseUrl + "user/kakao", {
              params : {
                userNickname : userNickname,
                userId : userId
              }
            })
              .then(result=> {
                console.log(result.data);
                if (result.data.userNickname == null) {
                  console.log("회원가입페이지로 보내기")
                } else {
                  console.log("로그인성공")
                }
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