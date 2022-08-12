<template>
  <div class="catalog">
    <div class="name_of_view">
      <h1 class="name_of_view__text">Каталог</h1>
      <!-- <i class="name_of_view__icon fad fa-th"></i> -->
    </div>
    <div class="main_category">
      <i class="fad fa-mobile category_icon"></i>
      <p class="name_of_main_category">Смартфоны</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-tablet category_icon"></i>
      <p class="name_of_main_category">Планшеты</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-watch category_icon"></i>
      <p class="name_of_main_category">Умные часы и браслеты</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-camera category_icon"></i>
      <p class="name_of_main_category">Фото-видео</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-tv category_icon"></i>
      <p class="name_of_main_category">ТВ</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-tv-alt category_icon"></i>
      <p class="name_of_main_category">Мониторы</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-headphones category_icon"></i>
      <p class="name_of_main_category">Аудиотехника</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-computer-speaker category_icon"></i>
      <p class="name_of_main_category">Компьютеры</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-microchip category_icon"></i>
      <p class="name_of_main_category">Комплектующие для ПК</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-keyboard category_icon"></i>
      <p class="name_of_main_category">Клавиатуры</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-mouse category_icon"></i>
      <p class="name_of_main_category">Компьютерные мыши</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-scanner-image category_icon"></i>
      <p class="name_of_main_category">Офисная электроника</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-washer category_icon"></i>
      <p class="name_of_main_category">Бытовая техника</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-shovel category_icon"></i>
      <p class="name_of_main_category">Строительство и ремонт</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-book-medical category_icon"></i>
      <p class="name_of_main_category">Красота и здоровье</p>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="main_category">
      <i class="fad fa-gamepad-alt category_icon"></i>
      <p class="name_of_main_category">Игры и софт</p>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
};
</script>

<style scoped>
.catalog {
  padding-top: 61px;
  padding-bottom: calc(4em + 15px);
}
.name_of_view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  margin: 15px 5px;
  box-shadow: 0 0 15px 5px #05050508;
  border-radius: 10px;
}
.name_of_view__text {
  font-size: 1.7em;
  margin: 0;
}
.name_of_view__icon {
  font-size: 1.7em;
}
.name_of_view__icon::after {
  color: #ff4000;
  opacity: 1;
}
.main_category {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  margin: 5px;
  font-size: 1.2em;
  border-radius: 10px;
  box-shadow: 0 0 15px 5px #05050508;
}
.category_icon {
  color: #050505;
  text-align: center;
  min-width: 35px;
}
.category_icon.fa-tv,
.category_icon.fa-watch,
.category_icon.fa-gamepad-alt {
  color: #ff6532;
}
.category_icon::after {
  color: #ff6532;
  opacity: 1;
}
.category_icon.fa-tv::after,
.category_icon.fa-watch::after,
.category_icon.fa-gamepad-alt::after {
  color: #050505;
}
.name_of_main_category {
  font-weight: 500;
}
.fa-chevron-right {
  flex-grow: 1;
  text-align: right;
}
</style>
