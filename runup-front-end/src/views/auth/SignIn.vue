<template>
    <div class="loginpage-container">
        <div class="loginpage-outer-box">
            <div class="loginpage-middle-box">
                <div class="loginpage-login-user">
                  <div class="loginpage-inner-box">
                      <div class="loginpage-inner-first">
                          <span class="loginpage-id-name">아이디</span> <input class="loginpage-input" type="text"  v-model="userId">
                        </div>
                        <div class="loginpage-inner-second">
                            <span class="loginpage-pw-name">비밀번호</span> <input class="loginpage-input" type="password"  v-model="userPw">
                        </div>
                    </div>
                    <div class="loginpage-button-box">
                        <div class="loginopage-login-Btn">
                            <button class="loginpage-loginBtn" @click="userlogin()">로그인</button>
                        </div>
                        <div class="loginpage-signup-Btn">
                            <router-link to="/signup"><button class="signupBtn">회원가입</button></router-link>
                        </div>
                    </div>
                    <div class="kakaologin">
                        <a class="kakaoa" @click="kakaoLogin()">
                        <img class="kakaoimg" src="../../assets/kakao_login_medium_narrow.png" style="max-width: 30%; height: auto;">
                        </a>
                        <button class="loginpage-loginBtn" @click="findPw()">비밀번호 찾기</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'SignIn',
  data() {
    return {
        userId:"",
        userPw:""
    };
  },
  computed: {
    ...mapGetters(["getVuexId","getVuexNickName"]),
  },
  methods: {
    ...mapActions(["setVuexId","setVuexNickName"]),
    userlogin() {
        var serverIP ='127.0.0.1',
            serverPort = 8080,
            pageUrl ='runup/user/login';
        this.$axios({
            url: `http://${serverIP}:${serverPort}/${pageUrl}`,
            method: "GET",
            params: {
                userId: this.userId,
                userPw: this.userPw
            },
            // responseType: 'json',
        }) 
        .then ((result)=> {
            console.log("axios 성공");
            console.log(result)
            if (result.data == "") {
                alert("로그인 실패")
            }else{
                alert("로그인 성공")
                this.setVuexId(result.data.userId);
                this.setVuexNickName(result.data.userNickName);
                this.$moveTo("/")
            }
        })
        .catch((error)=>{
            console.log("오류발생")
            console.log(error);
        })
    },
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
          const userNickname=res.properties.nickname;
          const userId=kakao_account.email;
          console.log(userId)
          this.$axios.get(this.baseUrl + "user/kakao", {
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
    },
    findPw() {
        this.$axios.get(this.baseUrl + "user/password", {
              params : {
                userId : this.userId,
                userPw : this.userPw
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

  }
 
}
</script>

<style>
.loginpage-container{
    display:flex;
    background-color: white;
    width: 99%;
    height: 630px;
}
.loginpage-outer-box {
    padding:100px 300px 100px 300px; /* 첫번째:북쪽 두번째:서쪽 세번째:남쪽 네번째:동쪽 */
    width: 99%;
}
.loginpage-middle-box {
    padding: 60px 150px 100px 150px;
    align-content: space-evenly;
    height: 200px;
    border: 10px;
}
.loginpage-login-user {
    display: inline-block;
    padding-top: 70px;
    padding-bottom: 30px;
    border-color: rgba(217, 217, 217, 1);
    border-style: solid;
    border-radius: 10px;
    width:450px;
    height: 200px;
    align-items: center;
}
.loginpage-inner-box {
    padding-bottom: 30px;
}
.loginpage-inner-first {
    padding-left: 50px;
    height: 50px;
}
.loginpage-inner-second {
    padding-left: 50px;
}
.loginpage-id-name {
    border-radius: 10px;
    background-color: rgba(215, 233, 247, 1);
    width: 100px ;
    height: 45px;
    padding: 3px 27px 3px 27px;
    /* font-size: large; */
}
.loginpage-pw-name {
    border-radius: 73px;
    background-color: rgba(215, 233, 247, 1);
    width: 100px ;
    height: 45px;
    padding: 3px 20px 3px 20px;
    /* font-size: large; */
}
.loginpage-input {
    padding: 0px 20px 0px 20px;
    background-color:rgba(217, 217, 217, 0.6);
    border: none; /* 테두리 검정색 없애기, 다른 색깔로 만들 수도 있다. 지금은 지워놓음 */
    border-radius: 73px; /* 테두리 둥글게 만들기 */
    width: 200px;
    height: 25px;
}
.loginpage-button-box {
    padding-left:120px;
}
.loginopage-login-Btn {
    width: 100px;
    display: inline-block;
}
.loginpage-loginBtn {
    width: 100px;
    height: 30px;
    border-radius: 73px;
    border: none;
    background-color: rgba(244, 209, 155, 1);

}
.loginpage-signup-Btn {
    display: inline-block;
    padding-left: 20px;
    width: 100px;
}
.signupBtn {
    width: 100px;
    height: 30px;
    border-radius: 73px;
    border: none;
    background-color: rgba(244, 209, 155, 1);
}
</style>