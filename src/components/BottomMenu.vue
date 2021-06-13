<template>
  <div class="bottom_menu">
    <button class="bottom_menu__btn active main_page">
      <svg
        id="Слой_1"
        data-name="Слой 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111.63 146.87"
      >
        <title>HardikRounded</title>
        <path
          class="cls-1"
          d="M1238.85,524.79a7,7,0,0,1,6.94-6.95h94.46a7,7,0,0,1,4.91,11.86L1300,574.87a7,7,0,0,0-.74,9l49.93,69.91a6.94,6.94,0,0,1-5.65,11h-97.73a7,7,0,0,1-6.94-7"
          transform="translate(-1238.85 -517.84)"
        />
        <path
          class="cls-2"
          d="M1283.89,598l-28.39,28.4a5.5,5.5,0,0,0-1.61,3.89v14.95a5.5,5.5,0,0,0,5.5,5.5h59.35a5.5,5.5,0,0,0,4.48-8.7l-31-43.34A5.5,5.5,0,0,0,1283.89,598Z"
          transform="translate(-1238.85 -517.84)"
        />
      </svg>
      <span>Главная</span>
    </button>
    <button class="bottom_menu__btn catalog">
      <i class="fad fa-th"></i><span>Каталог</span>
    </button>
    <button class="bottom_menu__btn favourite">
      <i class="fad fa-heart"></i><span>Избранное</span>
    </button>
    <button class="bottom_menu__btn profile">
      <i class="fad fa-user"></i><span>Профиль</span>
    </button>
    <button class="bottom_menu__btn shop_cart">
      <i class="fad fa-shopping-cart"></i><span>Корзина</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BottomMenu",
};
</script>

<style scoped>
.bottom_menu {
  height: 60px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  background: #fff;
  box-shadow: 0 0 10px 5px #05050510;
  border-top: 1px solid #05050510;
}
svg {
  height: 20.5px;
}
.bottom_menu__btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  background: none;
  border: none;
  filter: grayscale(1);
  opacity: 0.4;
}
.bottom_menu__btn.active {
  color: #ff4000;
  filter: grayscale(0);
  opacity: 1;
  font-weight: 500;
}
.bottom_menu__btn > i {
  position: relative;
  font-size: 1.5em;
  color: #050505;
}
.bottom_menu__btn > i::after {
  color: #ff4000;
  opacity: 1;
}
.bottom_menu__btn > span {
  font-family: "Rubik", sans-serif;
  font-size: 0.8em;
  margin-top: 3px;
  /* font-weight: 500; */
  color: #ff4000;
}
.cls-1 {
  fill: #050505;
  opacity: 0.9;
}
.cls-2 {
  fill: #ff4000;
}
</style>
