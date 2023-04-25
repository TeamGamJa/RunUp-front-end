<template>
    <div class="Running-container">
        <div class="Running-header">
            <div class="Running-category">
                <select id="Running-Bcategory" aria-label="카테고리" v-model="choice" name="카테고리" @change="fetchcategoryMedium">
                    <optgroup label="대분류">
                        <!-- <option v-for=" (Bcategory, index) in categoryBig" :key="index" :value="Bcategory" > {{ Bcategory}}</option> -->
                        <option>IT</option>
                        <option>라이프스타일</option>
                        <option>문제풀이</option>
                        <option>기타</option>
                    </optgroup>
                </select>
                <select id="Running-Mcategory" @change="inputSelectVal">
                    <optgroup label="중분류">
                        <option v-for=" (Mcategory, index) in categorymMedium" :key="index" :value="Mcategory" >{{ Mcategory }}</option>
                    </optgroup>
                </select>
                <button type="submit" name="categorySearchBtn" id="categorySearchBtn" @click.prevent="categorySearch()">검색</button>
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
                    <tr v-for="(run, idx) in runninglistall" :key="idx">
                        <td>{{ run.RunningNum }}</td>
                        <td>{{ run.RunningTitle }}</td>
                        <td>{{ run.userNickname}}</td>
                        <td>{{ run.userAbility }}</td>
                        <td>{{ run.userLuxColor }}</td>
                        <td>{{ run.userMentorCnt }}</td>
                        <td>{{ run.RunningDate}}</td>
                        <td>{{ run.RunningAble }}</td>
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
        RunningBcatogry: '전체',      // select #Running-Bcategory에 현재 선택되어 있는 값
        RunningMcategory: '전체',     // select #Running-Mcategory에 현재 선택되어 있는 값
        categoryBig:[''],             // select #Running-Bcategory안에 나열할 option 요소들의 리스트
        categorymMedium:[''],          // select #Running-Mcategory안에 나열할 option 요소들의 리스트
        runninglistall:[],  // 도움닿기 게시글 리스트 데이터 전송
        choice: ''
    }  
  },
  created(){
    // this.fetchrunninglistall()
    this.fetchcategoryBig()
    // this.fetchcategoryMedium()
  },
  update(){
    this.fetchrunninglistall()
  },
  methods: {
    inputSelectVal(e) {
        const sel = e.currentTarget;
        switch (sel.id) {
            case 'Running-Bcategory':
                this.RunningBcatogry = sel.value;
                break;
            case 'Running-Mcategory':
                this.RunningMcategory = sel.value;
                break;
        }
     },
     updateOptionList(type,list) {
        const arr = ['전체'];
        switch (type) {
            case 'Bcategory':
                this.categoryBig = [arr.concat(list)];
                break;
            case 'Mcategory': 
                this.categorymMedium = [arr.concat(list)];
                break;    
        }
     },
     updateRunningList(list) {
        this.runninglistall = list;
     },
     categorySearch(){
        var serverIP ='127.0.0.1',
            serverPort = 8080,
            pageUrl ='runup/running/s';
        this.$axios({
            url: `http://${serverIP}:${serverPort}/${pageUrl}`,
            method: "GET",
            data: {
                categoryBig : this.categoryBig == '전체' ? '%' : this.categoryBig,
                categorymMedium : this.categorymMedium == '전체' ? '%' : this.categorymMedium,
            },
        }).then((result) => {
            console.log(result);
            this.updateRunningList(result.data.list);
        }).catch (error=> {
        console.log(error)
        })
     },
    fetchcategoryBig(){
        console.log('g21')
        var serverIP ='127.0.0.1',
            serverPort = 8080,
            pageUrl ='runup/running/categorybig';
        this.$axios({
            url: `http://${serverIP}:${serverPort}/${pageUrl}`,
            method: "GET",
        }).then(response => {
        const categoryBigData = response.data.categoryBig;// axios를 통해 받은 데이터를 categorybig에 담기
        this.categoryBig = Object.values(categoryBigData);
        }).catch (error=> {
        console.log(error)
        })

    },
    fetchcategoryMedium(){
    // console.log(this.choice)
    var serverIP ='127.0.0.1',
        serverPort = 8080,
        pageUrl ='runup/running/categorymedium';
    this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "GET",
        params:{
            categoryBig :this.choice
        }
    }).then(response => {
        // console.log(response)
        const categoryMediumData = response.data.categoryMedium;
        this.categorymMedium = ['전체'].concat(Object.values(categoryMediumData));
    }).catch(error=> {
        console.log(error)
    })
},

    fetchrunninglistall() {
        console.log("dsafsaf")
        var serverIP ='127.0.0.1',
            serverPort = 8080,
            pageUrl ='runup/running/s';
        this.$axios({
            url: `http://${serverIP}:${serverPort}/${pageUrl}`,
            method: "GET",
        }).then(response => {
            console.log(response)
            this.runninglistall = response.data // axios를 통해 받은 데이터를 run에 담기
            console.log(this.runninglistall)
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
    height: 630px;
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