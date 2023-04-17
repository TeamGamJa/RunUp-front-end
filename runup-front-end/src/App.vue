<template>
  <div>
    <div class="head">
      <RunHeader></RunHeader>
    </div>
    <div class="body">
      <router-view />
      <RunFooter></RunFooter>
    </div>
  </div>
</template>

<script>
import RunHeader from './components/layout/RunHeader.vue';
import RunFooter from './components/layout/RunFooter.vue';

export default {
  name: 'App',
  components:{
    RunHeader,
    RunFooter
  }
}
</script>

<style>
.head {
  width: 99%;
  position: sticky; top:0; /* 상단에 head를 고정시키기 위한 코드 top:0% 를 써줘야한다. s
                              ticky는 fixed와 다르게 body부분이 보이고 body부분만 스크롤 되게 할 수 있다. */
  z-index: 1; /* 다른 화면보다 위에 있게 해주는것, 이해하기 쉬운 설명은 햄버거의 맨 밑에 빵 위에 패티 올라갔다고 생각하면 편하다. */
}

</style>
