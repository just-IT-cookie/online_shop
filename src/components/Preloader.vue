<template>
  <div class="preloader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Preloader",
  mounted() {
    let preloader = document.querySelector(".preloader");
    window.addEventListener("load", () => {
      window.setTimeout(() => {
        preloader.classList.add("loaded_hiding");
        window.setTimeout(() => {
          preloader.classList.add("loaded");
          preloader.classList.remove("loaded_hiding");
        }, 1000);
      }, 3000);
    });
    function randomValues() {
      anime({
        targets: ".circle",
        keyframes: [
          { rotate: 0, translateX: -100 },
          { rotate: 360, translateX: -100 },
        ],
        loop: true,
        // translateX: function () {
        //   return anime.random(-50, 50);
        // },
        // scale: function () {
        //   return anime.random(1, 3);
        // },
        // translateY: function () {
        //   return anime.random(-50, 50);
        // },
        easing: "easeInOutQuad",
        duration: 3000,
        complete: randomValues,
      });
    }
    randomValues();
  },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 5001;
}
.preloader.loaded_hiding {
  transition: 0.5s opacity;
  opacity: 0;
}
.preloader.loaded {
  display: none;
}
.circle {
  width: 30px;
  height: 30px;
  background: #000;
  border-radius: 50%;
}
.circle:first-child {
  background: #ff4000;
}
.circle:nth-child(2) {
  background: #050505;
}
.circle:nth-child(3) {
  background: #ff7d52;
}
.circle:last-child {
  background: #3d3d3d;
}
</style>
