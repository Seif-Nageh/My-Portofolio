<template>
  <div
    class="bg-gradient-to-tr from-gray-500 via-gray-700 to-black w-screen h-screen fixed top-0 left-0 overflow-hidden z-[-50]"
  >
    <ul class="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-45]">
      <li
        class="bg-white/5 absolute rounded-xl animate-spin-slow z-[-40] list-none w-20 h-20 -bottom-96 transition-all block"
        v-for="i in 10"
        :key="i"
      ></li>
    </ul>
  </div>
</template>

<style scoped>
  li:first-child {
    left: 10%;
  }
  li:nth-child(2) {
    left: 20%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 34s;
    animation-duration: 34s;
  }
  li:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }
  li:nth-child(4) {
    left: 40%;
    width: 120px;
    height: 120px;
    -webkit-animation-duration: 44s;
    animation-duration: 44s;
  }
  li:nth-child(5) {
    left: 70%;
  }
  li:nth-child(6) {
    left: 80%;
    width: 240px;
    height: 240px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }
  li:nth-child(7) {
    left: 32%;
    width: 320px;
    height: 320px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
  }
  li:nth-child(8) {
    left: 55%;
    width: 40px;
    height: 40px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
  }
  li:nth-child(9) {
    left: 25%;
    width: 40px;
    height: 40px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
  }
  li:nth-child(10) {
    left: 90%;
    width: 320px;
    height: 320px;
    -webkit-animation-delay: 22s;
    animation-delay: 22s;
  }
</style>
