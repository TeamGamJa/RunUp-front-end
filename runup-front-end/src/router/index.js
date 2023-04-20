import { createRouter, createWebHistory } from "vue-router"

import store from "../store"

const beforeAuth = isAuth => (to, from, next) => {
    const isAuthenticated = store.getters["isAuthenticated"]
    if((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
        return next()
    } else {
        next("/")  // 홈 화면으로 이동
    }
}




// 도움 닿기 Main Page
import HelpTouch from '../views/touch/HelpTouch.vue'

// 도움 닿기 종합 검색
import TatalSearch from '../views/tatal/TatalSearch'

// 로그인
import SignIn from '../views/auth/SignIn'

// 회원가입
import SignUp from '../views/auth/SignUp'
 
// 도움 닿기 메인 페이지
import FoundRunning from '../views/Running/FoundRunning'

const routes = [

    {
        path: "/",
        name: "HelpTouch",
        component: HelpTouch,
        
    },
    {
        path:"/TatalSearch",
        name: "TatalSearch",
        component: TatalSearch,
    },
    {
        path: "/FoundRunning",
        name: "FoundRunning",
        component: FoundRunning,
        beforeEnter: beforeAuth(false)
    },
    {
        path: "/SignIn",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/SignUp",
        name: "SignUp",
        component: SignUp,
    },
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router;
