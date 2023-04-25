<template>
  <div class="header-container">
      <div class="header-box">
          <div class="logo" >
              <router-link to="/" style="top:10px; left:10px"><img src="https://ifh.cc/g/nqOcCY.png"></router-link>
          </div>
          <div class="menu-bar">
              <div class="firstmenu">
                  <router-link to="/FoundRunning"><img src="https://ifh.cc/g/4n2F4Q.png" ></router-link>
              </div>
              <div class="secondmenu">
                  <router-link to="/createRunning"><img src="https://ifh.cc/g/yJCLcL.png" ></router-link>
              </div>
              <div class="thirdmenu">
                  <router-link to="/QA"><img src="https://ifh.cc/g/g58nka.png" ></router-link>
              </div>
              <div class="fourthmenu">
                  <router-link to="/pool"><img src="https://ifh.cc/g/Gjw8Lo.png" ></router-link>
              </div>
          </div>
          <div class="user-bar">
              <div class="user-login" v-if="!isAuthenticated">
                 <div class="login" >
                     <router-link to="/SignIn"><button class="Mainpage-Signin">로그인</button></router-link>
                  </div>
                  <div class="signup">
                      <router-link to="/SignUp"><button class="Mainpage-Signup">회원가입</button></router-link>
                  </div>
                  <div class="search">
                      <input type="text" class="totalSearchBar">
                      <button type="button" @click="searchList()" class="totalBtn">검색</button>
                  </div>
              </div>
              <div class="user-logout" v-else>
                 <div class="logout">
                     <router-link to="/SignIn"><button class="Mainpage-Signin">로그인</button></router-link>
                  </div>
                  <div class="signup">
                      <router-link to="/SignUp"><button class="Mainpage-Signup">회원가입</button></router-link>
                  </div>
                  <div class="search">
                      <input type="text" class="totalSearchBar">
                      <button type="button" @click="searchList()" class="totalBtn">검색</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
name: 'RunHeader',
components: {},
computed: {
  ...mapGetters(["isAuthenticated"]),
},
methods:{
  redirect() {
    console.log("redirect")
    console.log("isAuthenticated :" + this.isAuthenticated)
    if(!this.isAuthenticated) {
      this.$router.push({
        name: "HelpTouch",
      })
    }
  },
  logout() {
    this.$store
    .dispatch("logout",{})
    .then(()=> this.redirect())
    .catch(({ message }) => alert(message))
  },
},
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  background-color: rgba(249, 243, 223, 100%);
  height: 100px;
}
.header-box {
  display:flex; // box 안의 div를 자신안에 포함하게 함

}
.logo {
  display: inline-flex; // 옆으로 정렬되게 할 수 있다.
  padding: 5px 30px 10px 30px;

}
.menu-bar {
  width: 80%;
  display: inline-flex;
  // justify-content: space-evenly; // 메뉴바 간격을 일정하게 둠
  justify-content: flex-end; // 메뉴바를 주어진 공간 내에서 오른쪽 끝으로 이동시킴
  align-items:flex-end ; // 메뉴바를 하단으로 내리는 코드

}
.firstmenu {
  padding: 10px 20px 10px 10px;
}
.secondmenu {
  padding: 10px 20px 10px 10px;
}
.thirdmenu {
  padding: 10px 20px 10px 10px;
}
.fourthmenu {
  padding: 10px 20px 10px 10px;
}
.user-bar {
  display: inline-flex;
  flex-wrap: wrap;
}
.user-login {
  display: inline-flex;
  flex-wrap: wrap; // 옆으로 공간이 부족할 경우 밑으로 내린다.
  justify-content: flex-end;
  align-content: space-between; // 검색창을 하단으로 이동

}
.Mainpage-Signin {
  border-radius: 73px;
  width: 60px;
  height: 25px;
  background-color: rgba(244, 209, 155, 1);
  border: none;
}
.Mainpage-Signup {
  border-radius: 73px;
  width: 60px;
  height: 25px;
  background-color: rgba(244, 209, 155, 1);
  border: none;
}
.search {
  display: inline-flex;
  padding: 0px 0px 18px 0px;

}
.totalSearchBar {
  border-radius: 73px;
  border: none;
  background-color: rgba(215, 233, 247, 1);
  width: 200px;
}
.totalBtn {
  border: none;
  background-color: rgba(249, 243, 223, 100%);
  width: 50px;
  font-size: large;
}
.Rlink-custom{
  color: black;
}
</style>
