<template>
  <div class="bottom_menu">
    <button
      :class="{ active: $route.name === 'Home' }"
      class="bottom_menu__btn main_page"
    >
      <router-link to="/">
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
      </router-link>
    </button>

    <button
      :class="{ active: $route.name === 'Catalog' }"
      class="bottom_menu__btn catalog"
    >
      <router-link to="/catalog">
        <i class="fad fa-th"></i><span>Каталог</span>
      </router-link>
    </button>

    <button
      :class="{ active: $route.name === '' }"
      class="bottom_menu__btn favourite"
    >
      <router-link to="/">
        <i class="fad fa-heart"></i><span>Избранное</span>
      </router-link>
    </button>

    <button
      :class="{ active: $route.name === 'Profile' }"
      class="bottom_menu__btn profile"
    >
      <router-link to="/profile">
        <i class="fad fa-user"></i><span>Профиль</span>
      </router-link>
    </button>

    <button
      :class="{ active: $route.name === 'ShoppingCart' }"
      class="bottom_menu__btn shop_cart"
    >
      <router-link to="/shopping_cart">
        <i class="fad fa-shopping-cart"></i><span>Корзина</span>
      </router-link>
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
  height: 4em;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  background: #fff;
  box-shadow: 0 0 10px 5px #05050530;
  border-top: 1px solid #05050510;
}
svg {
  height: 20.5px;
}
.bottom_menu__btn,
.bottom_menu__btn > a {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  background: none;
  border: none;
  filter: grayscale(1);
  opacity: 0.6;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: 0.2s ease-in-out;
}
.bottom_menu__btn.active,
.bottom_menu__btn.active > a {
  color: #ff4000;
  filter: grayscale(0);
  opacity: 1;
  font-weight: 500;
  text-decoration: none;
}
.bottom_menu__btn > a > i {
  position: relative;
  font-size: 1.5em;
  color: #050505;
}
.bottom_menu__btn > a > i::after {
  color: #ff4000;
  opacity: 1;
}
.bottom_menu__btn > a > span {
  font-family: "Rubik", sans-serif;
  font-size: 0.85em;
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
