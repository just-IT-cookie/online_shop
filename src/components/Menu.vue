<template>
  <div class="menu">
    <div class="user_info_block">
      <div v-if="logged_in">
        <img
          class="user_photo"
          src="/img/user_photo/avada-team2-174543104.jpg"
          alt=""
        />
        <p class="user_name">Nikita Ionov</p>
        <p class="user_email">neckitionov@yandex.ru</p>
      </div>
      <div v-else>
        <i class="fal fa-user-circle fa-4x"></i>
        <router-link :to="{ path: '/auth/login' }" class="ent_reg_link">
          Войти/зарегистрироватьтся
        </router-link>
      </div>
    </div>
    <div class="list_of_menu_links">
      <span class="menu_link bonuses">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Слой_1"
          data-name="Слой 1"
          viewBox="0 0 265.47 265.47"
        >
          <circle class="cls-1" cx="134.87" cy="133.19" r="107.5" />
          <path
            class="cls-2"
            d="M202.72,112.86a135.79,135.79,0,0,1-4.21,33.66c0,.09,0,.18-.06.26a135.66,135.66,0,0,1-12.67,31.79h0c-.4.72-.8,1.43-1.21,2.14A136,136,0,0,1,168.8,202.6q-2.07,2.35-4.27,4.62a101.72,101.72,0,0,1-29.66-18.5,101.67,101.67,0,0,1-29.65,18.5c-1.47-1.51-2.9-3.05-4.27-4.62a136.1,136.1,0,0,1-15.77-21.89c-.4-.71-.81-1.42-1.2-2.14h0A134.8,134.8,0,0,1,71.3,146.78a2,2,0,0,1-.06-.26,136.42,136.42,0,0,1-.5-65.31,2.26,2.26,0,0,1,2.62-1.68A33.93,33.93,0,0,1,101,112.86a101.07,101.07,0,0,0,12.71,49.27,68.26,68.26,0,0,0,12.14-15.35c5.77-10,9.07-17.06,9.07-29.42,0,12.36,3.31,19.44,9.08,29.42a68.26,68.26,0,0,0,12.14,15.35A100.06,100.06,0,0,0,163,146.78a101.62,101.62,0,0,0,5.8-33.92,33.93,33.93,0,0,1,27.59-33.33A2.26,2.26,0,0,1,199,81.21,135.87,135.87,0,0,1,202.72,112.86Z"
          />
        </svg>
        Вёрсики <span class="count_of_werseks">{{ wersiks }}</span>
      </span>
      <span class="menu_link"><i class="far fa-th"></i>Каталог</span>
      <span class="menu_link"><i class="far fa-box-full"></i>Заказы</span>
      <span class="menu_link"><i class="far fa-heart"></i>Избранное</span>
      <span class="menu_link"><i class="far fa-badge-percent"></i>Купоны</span>
      <!-- <span class="menu_link"><i class="far fa-user"></i>Профиль</span> -->
      <span class="menu_link">
        <i class="far fa-box-alt"></i>Купленные товары
      </span>
      <span class="menu_link">
        <i class="far fa-balance-scale-right"></i>Списки сравнения
      </span>
      <span class="menu_link"><i class="far fa-cog"></i>Настройки</span>
      <span class="menu_link">
        <i class="far fa-question-circle"></i>О нас
      </span>
      <span class="menu_link"><i class="far fa-sign-out"></i>Выйти</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      city: "",
      logged_in: false,
      wersiks: 0,
    };
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  width: 300px;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 74px;
  background: #f8f8f8;
  z-index: 30;
  overflow-y: scroll;
  transition: 0.3s ease-in-out;
  transform: translate(-100%);
}
.menu.active {
  transform: translate(0);
}
.user_info_block {
  padding: 10px 0 15px 25px;
  border-bottom: 1px solid #f0f0f0;
  color: #323232;
}
.user_photo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}
.user_name {
  font-size: 1.2em;
  font-weight: 500;
  margin: 5px 0 2px 0;
}
.user_email {
  font-size: 0.9em;
  color: #a0a0a0;
  margin: 0;
}
.ent_reg_link {
  display: block;
  font-size: 1.2em;
  font-weight: 500;
  margin: 5px 0 2px 0;
  color: #323232;
  text-decoration: none;
}
.list_of_menu_links {
  display: flex;
  flex-direction: column;
  padding: 5px 25px 10px 25px;
}
.menu_link {
  color: #323232;
  font-size: 1.2em;
  padding: 15px 10px;
  font-weight: 400;
}
.cls-1,
.cls-2 {
  fill: #fff;
  stroke: #323232;
  stroke-width: 16px;
}
.cls-1 {
  stroke-miterlimit: 10;
}
.cls-2 {
  stroke-linejoin: round;
}
.menu_link > i {
  width: 40px;
  font-size: 1.2em;
}
.bonuses {
  display: flex;
  align-items: center;
}
.count_of_werseks {
  margin: 3px 5px 0 5px;
  color: #05050580;
}
.menu_link > svg {
  height: 30px;
  width: 30px;
  margin-left: -5px;
  margin-right: 10px;
}
</style>
