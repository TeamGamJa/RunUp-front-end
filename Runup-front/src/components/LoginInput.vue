<template>
	<div class="home">
		아이디 : <input type="text" v-model="userId">
		비밀번호 : <input type="text" v-model="userPw">
		<input type="button" @click="login" value="로그인">
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	name: 'LoginInput',
	data() {
		return {
			userId : '',
			userPw : ''
		}
	},
	methods: {
		login() {
			let tmp = this;
			axios.get(tmp._baseUrl + "login" , {
				params : {
					userId : tmp.userId,
					userPw : tmp.userPw
				}
			}).then(result=> {
				console.log(result.data);
			}).catch(function (e) {
                console.log(e);
			});
		}
	}
  }
  </script>
  
  