<template>
  <div class="search_block"></div>
  <input class="search_inp active" type="text" name="" id="" />
  <div
    class="search_btn active"
    @click="
      active = !active;
      blur_focus();
    "
  >
    <div class="search-close-btn"></div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    blur_focus() {
      function change_inp() {
        let input = document.querySelector(".search_inp");
        if (input.classList.contains("active")) {
          input.blur();
        } else {
          input.focus();
        }
      }
      setTimeout(change_inp, 300);
      let searchBlock = document.querySelector(".search_block");
      let searchInp = document.querySelector(".search_inp");
      let searchBtn = document.querySelector(".search_btn");
      searchBlock.classList.toggle("active");
      searchInp.classList.toggle("active");
      searchBtn.classList.toggle("active");
    },
  },
};
</script>

<style>
.search_block {
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  background: transparent;
  transition: 0.3s ease-in-out;
  z-index: 28;
  border-top: 2px solid #f0f0f0;
}
.search_block.active {
  width: 100%;
  height: calc(100% - 76px);
  bottom: 0;
  right: 0;
  border-radius: 0;
  background: #fdfdfd;
}
.search_btn {
  position: fixed;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 20px;
  /* padding: 15px; */
  color: #323232;
  background: #fbfbfb;
  z-index: 28;
  border-radius: 5px 20px 20px 5px;
  font-size: 1.2em;
  /* box-shadow: 0 0 10px 5px #05050508; */
  transform: rotate(0) scale(1);
  transition: 0.3s ease-in-out;
}
/* .search_btn:active {
  box-shadow: 0 0 10px 5px #05050500;
} */
.search_btn.active {
  transform: rotate(360deg) scale(0.95);
  border-radius: 50%;
  box-shadow: 0 0 10px 5px #05050520;
  background: #323232;
  color: #f0f0f0;
}
.search-close-btn {
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  border: 5px solid transparent;
  transition: 0.3s ease-in-out;
}
.search_btn.active .search-close-btn {
  width: 10px;
  height: 10px;
  top: 15px;
  left: 15px;
  border: 4px solid #f0f0f0;
}
.search-close-btn::before {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 11px;
  width: 4px;
  height: 22px;
  transform: rotate(-45deg);
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  background: #323232;
}
.search_btn.active .search-close-btn::before {
  top: 9px;
  left: 12px;
  width: 4px;
  height: 10px;
  border-radius: 10px;
  background: #f0f0f0;
}
.search-close-btn::after {
  content: "";
  display: block;
  position: absolute;
  background: #323232;
  transform: translate(11px, 2px) rotate(45deg);
  transition: 0.3s ease-in-out;
  width: 4px;
  border-radius: 10px;
  height: 22px;
}
.search_btn.active .search-close-btn::after {
  top: 0px;
  left: 0px;
  width: 4px;
  height: 10px;
  background: #00000000;
  transform: rotate(45deg);
  transition: 0.3s ease-in-out;
}
.search_inp {
  width: calc(100% - 40px - 5px - 75px);
  height: 55px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 28;
  border-radius: 50px 100px 100px 50px;
  padding: 0 65px 0 10px;
  box-shadow: 0 0 10px 5px #05050510;
  transition: 0.2s ease-in-out 0.1s;
  border: 0;
  font-size: 0.95em;
}
.search_inp:focus,
.search_inp:active {
  outline: 0;
  outline-offset: 0;
}
.search_inp.active {
  background: transparent;
  width: 5px;
  left: auto;
  right: 0px;
  visibility: hidden;
  border-radius: 50%;
  box-shadow: none;
}
</style>
