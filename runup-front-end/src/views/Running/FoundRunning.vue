<template>
    <div class="Running-container">
        <div class="Running-header">
            <div class="Running-category">
                <select id="Running-catecory" data-title="카테고리">
                    <!-- <option v-for="(categorybig, index) in categorybig" :value="index"> {{ data.title }}</option> -->
                </select>
            </div>
        </div>
        <div class="Running-body">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th> 
                        <th>Runner</th>
                        <th>특기</th>
                        <th>무지개</th>
                        <th>Runner 횟수</th>
                        <th>작성일</th>
                        <th>마감여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(run, idx) in runningList" :key="idx">
                        <td>{{ run.num }}</td>
                        <td>{{ run.title }}</td>
                        <td>{{ run.NickName }}</td>
                        <td>{{ run.ability }}</td>
                        <td>{{ run.grade }}</td>
                        <td>{{ run.count }}</td>
                        <td>{{ run.candidate}}</td>
                        <td>{{ run.closer }}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div class="Running-footer">
            <div class="searchFunc">
                <select id="searchList">
                    <option value="0" selected="selected">제목</option>
                    <option value="1">작성자</option>
                    <option value="2">제목+작성자</option>
                </select>
                <input type="text">
                <button type="button">검색</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FoundRunning',
  data() {
    return {
        categorybig:{},
        runningList:{},  // 도움닿기 게시글 리스트 데이터 전송

    };
  },
  created(){
    this.fetchcategorybig(),
    this.fetchrunningList()
  },
  methods: {
    fetchcategorybig(){
        var serverIP ='127.0.0.1',
            serverPort = 8080,
            pageUrl ='runup/running/category';
        this.$axios({
            url: `http://${serverIP}:${serverPort}/${pageUrl}`,
            method: "GET",
        }).then(response => {
        this.categorybig = response.data // axios를 통해 받은 데이터를 categorybig에 담기
        }).catch (error=> {
        console.log(error)
        })

    },
    fetchrunningList() {
        var serverIP ='127.0.0.1',
            serverPort = 8080,
            pageUrl ='runup/running/board';
        this.$axios({
            url: `http://${serverIP}:${serverPort}/${pageUrl}`,
            method: "GET",
        }).then(response => {
        this.run = response.data // axios를 통해 받은 데이터를 run에 담기
        }).catch (error=> {
        console.log(error)
        })

    }
  }
}
</script>

<style>
.Running-container {
    display:flex;
    background-color: white;
    flex-direction: column;
    height: 570px;
}
.Running-header {
    display:inline-flex;
    width: 100%;
    height: 50px;
}
.Running-body {
    flex-direction: column;
    width: 100%;
    height: 420px;
}
table {
    width: 100%;
    text-align: center;
}
table th {
    padding: 12px;
    border-bottom: 2px solid darkgray;
}
table td {
    padding: 12px;
}
.Running-footer {
    width: 100%;
    height: 30px;
    justify-content: center;

}
.searchFunc {
    padding-left: 550px;
    justify-content: center;
}
</style>