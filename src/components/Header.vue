<template>
  <header>
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 py-4">
            <h4 class="text-white">사이트 맵</h4>
            <ul class="list-unstyled"><!--오른쪽 클릭시 나오는 것들-->
              <li>
                <router-link to="/" class="text-white">메인 화면</router-link>
              </li>
              <li v-if="$store.state.account.id">
                <router-link to="/orders" class="text-white">주문 내역</router-link>
              </li>
              <li>
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <div style="margin-right: 5px; display: inline-block;">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
              class="bi bi-bootstrap-fill" aria-hidden="true" viewBox="0 0 16 16">
              <path
                d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
              <path
                d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
            </svg>
          </div>
          <strong>Beurre</strong>
        </router-link>
        <router-link to="/cart" class="cart btn" v-if="$store.state.account.id">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
          aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import store from '@/scripts/store';
import router from '@/scripts/router';
import axios from 'axios';

export default {
  name: 'Header', // 컴포넌트 이름을 헤더로 지정
  setup() {
    const logout = () => {
      axios.post("/api/account/logout").then(() => {
        store.commit("setAccount", 0); // setAccount 호출
        router.push({ path: "/" });
      })

    }

    return { logout };
  }
}
</script>

<style scoped>
header ul li a {
  cursor: pointer;
}

header .navbar .cart {
  margin-left: auto;
  color: #fff;
}
</style>