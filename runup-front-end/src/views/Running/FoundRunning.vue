<template>
    <div class="Running-container">
        <div class="Running-header">
            <div class="Running-category">
                <select id="BigList">
                    <option value="0" selected="selected">대분류</option>
                    <option value="1">IT</option>
                    <option value="2">LifeStyle</option>
                    <option value="3">문제풀이</option>
                    <option value="4">기타</option>
                </select>
                ->
                <select id="middleList">
                    <option value="0" selected="selected">대분류</option>
                    <option value="1">IT</option>
                    <option value="2">LifeStyle</option>
                    <option value="3">문제풀이</option>
                    <option value="4">기타</option>
                </select>
            </div>
        </div>
        <div class="Running-body">
            <table>
                <thead>
                    <th>번호</th>
                    <th>제목</th>
                    <th>Runner</th>
                    <th>특기</th>
                    <th>무지개</th>
                    <th>Runner 횟수</th>
                    <th>작성일</th>
                    <th>마감여부</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><router-link to="/detailRunning/1">java란?</router-link></td>
                        <td>아이유</td>
                        <td>Java</td>
                        <td>녹색</td>
                        <td>5회</td>
                        <td>2023-01-01</td>
                        <td>모집중</td>
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
        category: [
            {id:1, name:"IT"},
            {id:2, name:"LifeStyle"},
            {id:3, name:"문제풀이"},
            {id:4, name:"기타"}  
        ],
        selectedCategory: null
    };
  },
  methods: {
    selectCategory(category) {
        this.selectedCategory = category;
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