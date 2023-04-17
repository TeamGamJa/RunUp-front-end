<template>
    <div class="footer-container">
        <div class="footer-left"><h4>(주)도움닿기</h4></div>
        <div class="footer-center"><img src="https://ifh.cc/g/KVr1QN.png" style="width:200px; height: 40px;"></div>
        <div class="footer-right"><h4>기간: 4/10 ~ 5/12</h4></div>
    </div>
</template>

<script>
export default {
  name: 'RunFooter'
}
</script>

<style>
.footer-container {
    display:flex;
    justify-content: space-evenly;
    height: 40px;
}
.footer-left {
    display:inline-flex;
    
}
.footer-center {
    display:inline-flex;
    height: 40px;
}
.footer-right {
    display:inline-flex;
}

</style>
