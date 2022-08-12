<template>
  <div id="app">
    <!-- <Preloader></Preloader> -->
    <Search></Search>
    <Menu></Menu>
    <div class="transparent_block"></div>
    <Head v-on:changeClass="changeClassOfMenu"></Head>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import Head from "./components/Head";
import Menu from "@/components/Menu";
import Search from "@/components/Search";
// import Preloader from "./components/Preloader";

export default {
  components: { Head, Menu, Search },
  data() {
    return {
      transitionName: "fold",
    };
  },
  watch: {
    $route() {
      let body = document.querySelector("body");
      let menu = document.querySelector(".menu");
      let menu_btn = document.querySelector(".menu_btn");
      let transparent_block = document.querySelector(".transparent_block");
      menu.classList.remove("active");
      menu_btn.classList.remove("active");
      body.classList.remove("noactive");
      transparent_block.classList.remove("active");

      let searchBlock = document.querySelector(".search_block");
      let searchInp = document.querySelector(".search_inp");
      let searchBtn = document.querySelector(".search_btn");
      if (searchBlock.classList.contains("active")) {
        searchBlock.classList.remove("active");
        searchInp.classList.add("active");
        searchBtn.classList.add("active");
      }
    },
  },
  methods: {
    changeClassOfMenu() {
      let body = document.querySelector("body");
      let menu = document.querySelector(".menu");
      let menu_btn = document.querySelector(".menu_btn");
      let transparent_block = document.querySelector(".transparent_block");
      menu.classList.toggle("active");
      menu_btn.classList.toggle("active");
      body.classList.toggle("noactive");
      transparent_block.classList.toggle("active");
    },
  },
};
</script>
<style>
#app {
  margin-top: 75px;
}
.slide-fade-enter-active {
  transition: 0.2s ease;
}
.slide-fade-leave-active {
  position: fixed;
  transition: 0.2s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  /* transform: translateX(100%); */
  opacity: 0;
  transition: 0.2s ease;
}
.transparent_block {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #05050550;
  z-index: 29;
  visibility: hidden;
  opacity: 0;
  transition: 0.13s ease-in-out;
}
.transparent_block.active {
  opacity: 1;
  visibility: visible;
}
</style>
