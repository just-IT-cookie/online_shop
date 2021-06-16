<template>
  <div class="preloader">
    <div class="box_container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
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
        }, 2000);
      }, 1000);
    });
    function randomValues() {
      let animation = anime({
        targets: ".box",
        translateX: function () {
          return anime.random(0, 49);
        },
        rotate: function () {
          return anime.random(0, 180);
        },
        translateY: function () {
          return anime.random(0, 49);
        },
        easing: "easeInOutQuad",
        duration: 500,
        complete: randomValues,
      });
      let preloader = document.querySelector(".preloader");
      let boxes = document.querySelectorAll(".box");
      if (preloader.classList.contains("loaded_hiding")) {
        animation.remove(".box");
        boxes.forEach((el) => {
          el.style.transition = "0.5s ease-in-out";
          el.style.transform = "translateX(0) rotate(0) translateY(0)";
        });
      }
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
  transition: 0.5s opacity 1.5s;
  opacity: 0;
}
.preloader.loaded {
  display: none;
}
.box_container {
  display: flex;
  flex-wrap: wrap;
  width: 102px;
  height: 102px;
}
.box {
  width: 30px;
  height: 30px;
  background: #050505;
  border-radius: 5px;
  margin: 2px;
}
.box:nth-child(odd) {
  background: #ff4000;
}
</style>
