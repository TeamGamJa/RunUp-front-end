<template>
    <div class="container">
        <div class="info-box">
            <div class="first">
                <div class="text">
                    <h3>설명을 시작하겠습니다. 여기는 설명란이고요 설명을 길게 쓸것입니다. 최대한 길게 써서 작성할 것이니 기대 많이 해주시고요 구독 좋아요 한번씩 부탁드립니다.</h3>
                </div>
                <div class="image"> <!-- 이미지 2개 겹치기 -->
                    <div style="position: relative;"> <!-- position: relative = 상대위치(뒤쪽에 겹쳐서 보이는 이미지) -->
                        <img src="https://ifh.cc/g/2bzhca.png">
                         <div style="position: absolute; top: 50px; left: 50px;"> <!-- 앞쪽에 완전히 보이는 이미지, absolute: 고정 위치-->
                        <img src="https://ifh.cc/g/l6dpmm.png">
                         </div>
                    </div>
                </div>
            </div>
            <div class="second">
                <div class="text">
                    <h3>설명을 시작하겠습니다. 여기는 설명란이고요 설명을 길게 쓸것입니다. 최대한 길게 써서 작성할 것이니 기대 많이 해주시고요 구독 좋아요 한번씩 부탁드립니다.</h3>
                </div>
                <div class="image">
                    <div style="position: relative;">
                        <img src="https://ifh.cc/g/2bzhca.png">
                         <div style="position: absolute; top: 50px; left: 50px;">
                        <img src="https://ifh.cc/g/l6dpmm.png">
                         </div>
                    </div>
                </div>
            </div>
            <div class="third">
                <div class="text">
                    <h3>설명을 시작하겠습니다. 여기는 설명란이고요 설명을 길게 쓸것입니다. 최대한 길게 써서 작성할 것이니 기대 많이 해주시고요 구독 좋아요 한번씩 부탁드립니다.</h3>
                </div>
                <div class="image">
                    <div style="position: relative;">
                        <img src="https://ifh.cc/g/2bzhca.png">
                         <div style="position: absolute; top: 50px; left: 50px;">
                        <img src="https://ifh.cc/g/l6dpmm.png">
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelpTouch'
}
</script>

<style>
.container {
    display: flex;
    background-color: white;
}
.first {
    display:inline-flex;
    padding: 50px;
    justify-content: space-evenly;
}
.second {
    display:inline-flex;
    padding: 50px;
    justify-content: space-evenly;
    background-color: rgba(253, 252, 229, 0.85);
}
.third {
    display:inline-flex;
    padding: 50px;
    justify-content: space-evenly;
}
.text {
    width: 30%;
}
.img {
    margin-top: 16px;
}
</style>