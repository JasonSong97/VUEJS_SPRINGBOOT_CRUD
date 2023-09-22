<template>
     <div class="card shadow-sm">
          <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
          <div class="card-body">
          <p class="card-text">{{ item.name }}</p>
          <div class="d-flex justify-content-between align-items-center">
               <button class="btn btn-primary">구입하기</button> 
               <small class="text-body-secondary">
                    {{ lib.getNumberFormatted(item.price) }} 원
               </small>
          </div>
          </div>
     </div>
</template>

<script>
import lib from "@/scripts/lib";

export default {
     name: "Card", // 헤더로 지정
     props:{
          item: Object
     },

     setup(){
          return {lib}
     }
}
</script>

<style scoped>
.card .img{
     display:inline-block;
     width:100%;
     height:250px;
     background-size: cover;
     background-position: center;
}
</style>