import { createStore } from 'vuex'

const store = createStore ({
    state: { // [변수들의 집합]
        // 글로벌로 관리될 상태 값
        VuexId:"",
        VuexNickName:"",
    },
    getters: { //[state의 변수들을 get 호출]
        // 데이터에 변화를 줄 순 없다.
        getuserId: (state) => {
            return state.VuexId;
        },
        getuserNickName: (state) => {
            return state.VuexNickName;
        }
    },
    mutations: { // [변수들을 조작하는 함수들]
        // 실제 데이터 변화가 일어나는 곳
        mutSetVuexId: (state,userId) => {
            state.VuexId = userId;
        },
        mutSetVuexNickName: (state, userNickName) => {
            state.VuexNickName = userNickName;
        }
    },
    actions: { // [비동기 처리를 하는 함수들]
        // mutaion을 일을키위한 행동, 컴포넌트에서는 actions을 사용한다
        setVuexId: (contect , userId) => {
            contect.commit("mutSetVuexId",userId);
        },
        setVuexNickName: (contect,userNickName) => {
            contect.commit("mutSetVuexNickName",userNickName);
        }
    },
});

export default store;
