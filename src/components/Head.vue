<template>
  <header>
    <div class="logo_and_nav">
      <div @click="$emit('changeClass')" class="menu_btn">
        <span class="line"></span>
      </div>
      <router-link :to="{ path: '/' }">
        <svg
          class="main_logo_svg"
          id="Слой_1"
          data-name="Слой 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 226.51 226.51"
        >
          <defs>
            <linearGradient
              id="Безымянный_градиент_4"
              x1="135.41"
              y1="99"
              x2="184.89"
              y2="99"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#cce0f4" />
              <stop offset="0" stop-color="#c3dcf2" />
              <stop offset="0" stop-color="#c2dcf2" />
              <stop offset="0" stop-color="#c7def3" />
              <stop offset="0" stop-color="#bcdaf1" />
              <stop offset="0" stop-color="#a0cfec" />
              <stop offset="0" stop-color="#71bde5" />
              <stop offset="0" stop-color="#32a4da" />
              <stop offset="0" stop-color="#1e9cd7" />
              <stop offset="0" stop-color="#4d4d4d" />
              <stop offset="0.22" stop-color="#323232" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="Безымянный_градиент_49"
              x1="32.44"
              y1="92.54"
              x2="97.71"
              y2="111.88"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop offset="0.78" stop-color="#323232" />
              <stop offset="1" stop-color="#4d4d4d" />
              <stop offset="1" stop-color="#1e9cd7" />
              <stop offset="1" stop-color="#32a4da" />
              <stop offset="1" stop-color="#71bde5" />
              <stop offset="1" stop-color="#a0cfec" />
              <stop offset="1" stop-color="#bcdaf1" />
              <stop offset="1" stop-color="#c7def3" />
              <stop offset="1" stop-color="#c2dcf2" />
              <stop offset="1" stop-color="#c3dcf2" />
              <stop offset="1" stop-color="#cce0f4" />
            </linearGradient>
          </defs>
          <path
            class="cls-1"
            d="M184.89,81.84a144.51,144.51,0,0,1-4.46,35.72c0,.1-.06.19-.08.28a143,143,0,0,1-13.43,33.73h0a71.57,71.57,0,0,1-18-7.36,72.34,72.34,0,0,1-13.48-10.08,106.61,106.61,0,0,0,7.33-16.29,107.59,107.59,0,0,0,6.15-36,36,36,0,0,1,29.29-35.37,2.42,2.42,0,0,1,2.78,1.8A143.94,143.94,0,0,1,184.89,81.84Z"
          />
          <path
            class="cls-2"
            d="M91.11,134.13a72.34,72.34,0,0,1-13.48,10.08,71.57,71.57,0,0,1-18,7.36h0a143,143,0,0,1-13.43-33.73c0-.09-.06-.18-.08-.28a145.31,145.31,0,0,1-.53-69.29,2.42,2.42,0,0,1,2.78-1.8A36,36,0,0,1,77.63,81.84a107.6,107.6,0,0,0,13.48,52.29Z"
          />
          <path
            class="cls-3"
            d="M167.27,150.92c-.42.76-.85,1.52-1.28,2.27a144.06,144.06,0,0,1-16.73,23.23q-1.47,1.68-3,3.31a3.2,3.2,0,0,1-3.57.74,107.79,107.79,0,0,1-28.52-18,1.37,1.37,0,0,0-1.82,0,107.79,107.79,0,0,1-28.52,18,3.2,3.2,0,0,1-3.57-.74q-1.53-1.64-3-3.31a144.06,144.06,0,0,1-16.73-23.23c-.43-.75-.86-1.51-1.28-2.27a71.5,71.5,0,0,0,18-7.36,72.52,72.52,0,0,0,26.37-26.37c6.12-10.59,9.63-18.11,9.63-31.22,0,13.11,3.51,20.63,9.63,31.22a72.52,72.52,0,0,0,26.37,26.37A71.5,71.5,0,0,0,167.27,150.92Z"
          />
        </svg>
      </router-link>
      <router-link to="/Cart">
        <i class="cart fas fa-shopping-cart"></i
      ></router-link>
    </div>
    <!-- <div class="header__serach_block">
      <input
        class="header__search_in"
        type="text"
        placeholder="Я хочу купить..."
      />
      <button class="header__search_btn"><i class="fas fa-search"></i></button>
    </div> -->
  </header>
</template>

<script>
export default {
  name: "Head",
  // data() {
  //   return {
  //     clicked: false,
  //   };
  // },
  mounted() {},
  created() {},
};
</script>

<style scoped>
a {
  all: unset;
}

header {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 35;
}
.logo_and_nav {
  background: #fdfdfd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
}
.line {
  display: block;
  position: relative;
  width: 28px;
  height: 5px;
  border-radius: 2px;
  background: #323232;
  transition: 0.3s ease-in-out;
}
.menu_btn.active > .line {
  transform: rotate(45deg);
}
.menu_btn.active > .line::after {
  top: 0px;
  transform: rotate(-90deg);
}
.menu_btn.active > .line::before {
  background: transparent;
}
.line::before {
  content: "";
  position: absolute;
  top: -10px;
  width: 28px;
  height: 5px;
  border-radius: 2px;
  background: #323232;
  transition: 0.2s ease-in-out;
}
.line::after {
  content: "";
  position: absolute;
  top: 10px;
  width: 28px;
  height: 5px;
  border-radius: 2px;
  background: #323232;
  transition: 0.3s ease-in-out;
}
.main_logo_svg {
  height: 60px;
}
.menu,
.cart {
  color: #323232;
  font-size: 1.7em;
}

.header__serach_block {
  display: flex;
  background: #fafafa;
  padding: 15px 15px 10px 15px;
  z-index: 25;
  margin-top: 70px;
}
.header__search_in {
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 0.8em 10px;
  font-size: 1em;
  color: #323232dd;
  outline: none;
  box-shadow: 0 0 5px 2px #05050505;
}
.header__search_btn {
  min-width: 50px;
  border-radius: 10px;
  margin-left: 10px;
  border: none;
  font-size: 1.1em;
  /* color: #f0f0f0f0; */
  color: #323232;
  background: #f0f0f0f0;
  box-shadow: 0 0 5px 1px #05050515;
}

.cls-1 {
  fill: url(#Безымянный_градиент_4);
}
.cls-2 {
  fill: url(#Безымянный_градиент_49);
}
.cls-3 {
  fill: #4d4d4d;
}
</style>
