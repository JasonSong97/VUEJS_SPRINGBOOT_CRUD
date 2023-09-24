<template>
<div class="home">
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <!--Card 순회하며 Component 랜더링-->
        <div class="col" v-for="(item, idx) in state.items" :key="idx">
          <Card :item="item"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"; // HTTP 통신을 위한 라이브러리(서버로 부터 데이터 가져오기)
import { reactive } from "vue"; // 상태를 반응적으로 만들기 위한 것
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {Card}, // Card Component 사용
  setup(){
    const state = reactive({
      items: [] // state는 빈 배열을 포함
    })

    // Card Component 생성시, axios사용해 서버로부터 데이터를 가지고와 state.items에 할당
    axios.get("/api/items").then(({data}) => {
      state.items = data; // state의 items에 내용 담기
    });

    return {state}
  }
}
</script>

<style scoped>

</style>