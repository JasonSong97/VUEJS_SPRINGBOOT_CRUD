<template>
  <div class="cart">
    <div class="container">
      <ul>
        <li v-for="(item, idx) in state.items" :key="idx">
          <img :src="item.imgPath"/>
          <span class="name">{{ item.name }}</span>
          <span class="name">{{ item.price }}</span>
        </li>
      </ul>
    </div>>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup(){
    const state = reactive({
      items:[]
    })

    axios.get("/api/cart/items").then(({data}) => {
        console.log(data);
        state.items = data;
    })

    return {state}
  }
}
</script>

<style scoped>
</style>