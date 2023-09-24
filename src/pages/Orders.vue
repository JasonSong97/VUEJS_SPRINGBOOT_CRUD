<template>
  <div class="orders">
    <div class="container">
      <table>
        <thread>
          <tr>
            <th>번호</th>
            <th>주문자 이름</th>
            <th>주소</th>
            <th>결제수단</th>
            <th>구입항목</th>
          </tr>
        </thread>
        <tbody>
          <tr v-for="(o, idx) in state.orders" :key="idx">
            <!--역순으로 출력-->
            <tb>{{ state.orders.length - idx }}</tb>
            <tb>{{ o.name }}</tb>
            <tb>{{ o.address }}</tb>
            <tb>{{ o.payment }}</tb>
            <tb>{{ o.items }}</tb>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import lib from "@/scripts/lib";

export default {
  setup() {
    const state = reactive({
      orders: []
    })

    axios.get("/api/orders").then(({ data }) => {
      console.log(data);
      state.orders = data;
    })

    return { state, lib, }
  }
}
</script>

<style scoped></style>