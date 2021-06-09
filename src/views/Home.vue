<template>
  <div class="homePage">
    <div class="swiperModule">
      <swiper
        id="banners_swiper"
        :speed="350"
        :loop="true"
        :space-between="50"
        :autoplay="{ delay: 5000 }"
        :pagination="true"
      >
        <swiper-slide v-for="banner in banners" :key="banner">
          <img class="swiperImg" :src="banner" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div v-for="module in modules" :key="module" class="day_items_block">
      <div class="offer">
        <h2 class="offers_name">{{ module.name }}</h2>
        <i :class="module.icon + ' fa-2x'" :style="module.icon_style"></i>
      </div>
      <div class="offer__items_block">
        <swiper
          id="offer__items_swiper"
          v-if="module.id_name === 'popular_vendors'"
          :slides-per-view="2"
          :space-between="10"
          :pagination="{}"
        >
          <swiper-slide v-for="vendor in vendors" :key="vendor">
            <div class="vendors">
              <img class="vendor_img" :src="vendor[0]" alt="" />
              <img class="vendor_img" :src="vendor[1]" alt="" />
            </div>
          </swiper-slide>
        </swiper>
        <swiper
          id="offer__items_swiper"
          v-else
          :slides-per-view="2"
          :space-between="5"
          :pagination="{}"
        >
          <swiper-slide
            v-for="item in items.filter(
              (item) => item.module_locating === module.id_name
            )"
            :key="item"
          >
            <Item :itemData="item"></Item>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="news">
      <div class="offer">
        <h2 class="offers_name">Новости</h2>
        <i
          class="fal fa-newspaper fa-2x"
          style="color: #050505cc; text-shadow: 0 0 10px #05050550"
        ></i>
      </div>
      <swiper id="offer__items_swiper" :space-between="10" :pagination="{}">
        <swiper-slide>
          <div class="offer__new">
            <img class="new__img" src="/img/news/3080ti.jpg" alt="" />
            <div class="new__descritipon">
              <h3 class="new__name">
                NVIDIA анонсировала RTX 3080Ti и RTX 3070Ti
              </h3>
              <p class="new__some_info">
                NVIDIA анонсировала графическую карту NVIDIA GeForce RTX 3080Ti,
                которую планируется выпустить уже 3 июня по цене 1199 долларов
                США.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="offer__new">
            <img class="new__img" src="/img/news/microsoft.jpg" alt="" />
            <div class="new__descritipon">
              <h3 class="new__name">
                Microsoft начала автоматически обновлять ПК
              </h3>
              <p class="new__some_info">
                Компания Microsoft ускоряет распространение самой свежей версии
                Windows 10 и уже начала автоматически обновлять ПК
                пользователей. Microsoft начала автоматически обновлять ПК до
                самой свежей версии Windows 10 Майское обновление Windows 10 May
                2021 Update, также известное под кодовым названием 21H1, стало
                первым крупным апдейтом Windows 10 в 2021 году, а его релиз
                состоялся 18 мая.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="offer__new">
            <img
              class="new__img"
              src="/img/news/microsoft_new_gen.jpg"
              alt=""
            />
            <div class="new__descritipon">
              <h3 class="new__name">
                Новое поколение Windows представят уже 24 июня
              </h3>
              <p class="new__some_info">
                Microsoft анонсировала специальное мероприятие с презентацией
                «нового поколения Windows» — презентация начнётся 24 июня в
                18:00 МСК.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <footer>
        <div class="footer__subscribe_block">
          <p class="subscribe_block__subscribe_text">
            Подпишитесь, и мы будем держать вас в курсе важной информации.
          </p>
          <input
            class="subscribe_block__subscribe_input"
            placeholder="Ваш e-mail"
            type="email"
          />
          <button class="subscribe_block__subscribe_btn">Подписаться</button>
        </div>
        <div class="footer__info_block">
          <div class="info_block__footer_logo">
            <svg
              class="footer_logo__svg"
              id="Слой_1"
              data-name="Слой 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 898.1 147.43"
            >
              <title>HardikRounded</title>
              <path
                d="M452.38,657.76v-133a7,7,0,0,1,6.95-6.95h3.91a7,7,0,0,1,6.95,6.95v50.53a7,7,0,0,0,6.95,6.95h71.59a7,7,0,0,0,6.95-6.95V524.79c0-3.84,2.11-6.95,6-6.95h4.91a7,7,0,0,1,7,6.95v133a7,7,0,0,1-7,7h-3.91a7,7,0,0,1-7-7V607a7,7,0,0,0-6.95-6.95H477.14a7,7,0,0,0-6.95,6.95v50.74a7,7,0,0,1-6.95,7h-3.91A7,7,0,0,1,452.38,657.76Z"
                transform="translate(-452.38 -517.56)"
              />
              <path
                d="M662.74,517.84h12.91a7,7,0,0,1,6.43,4.31l54.64,133a6.94,6.94,0,0,1-6.42,9.59h-2.38a7,7,0,0,1-6.45-4.36l-14.34-35.81a6.93,6.93,0,0,0-6.45-4.36h-63a6.94,6.94,0,0,0-6.44,4.33l-14.53,35.86a7,7,0,0,1-6.44,4.34h-2.19a6.94,6.94,0,0,1-6.42-9.59l54.64-133A7,7,0,0,1,662.74,517.84Zm-11.29,81.92,35.48.12a5.76,5.76,0,0,0,5.35-8l-17.82-43.36a5.77,5.77,0,0,0-10.67,0l-17.65,43.24A5.76,5.76,0,0,0,651.45,599.76Z"
                transform="translate(-452.38 -517.56)"
              />
              <path
                d="M794.88,617.28a7,7,0,0,0-7,6.94v33.54c0,3.84-2.11,7-5.95,7h-5.91a7,7,0,0,1-7-7v-133a7,7,0,0,1,7-6.95h53A94.71,94.71,0,0,1,845,519a48.69,48.69,0,0,1,12.13,3.69c8.44,3.94,15.09,8.78,19.94,16.52s6.28,17.32,6.28,26.74c0,11,.66,20.79-6,29.44a60,60,0,0,1-17.68,15.55c-3.58,2.11-1.59,6.83.9,10.17l24.22,32.5c3.41,4.59-2.86,11.1-8.57,11.1h-3a6.93,6.93,0,0,1-5.53-2.74l-31.92-42a7,7,0,0,0-5.51-2.74M834.35,596c6,0,9.89-2.31,15-5.31s6-4.21,9.64-9.64c3.28-4.89,2-9,2-15,0-6.68-.94-11.91-4.45-17.33s-7.57-7-13.79-9.64c-4.49-1.84-7.56-2-15.74-2h-28.8a5.69,5.69,0,0,0-5.69,5.69v47.45a5.68,5.68,0,0,0,5.69,5.69Z"
                transform="translate(-452.38 -517.56)"
              />
              <path
                d="M928.64,657.76v-133a7,7,0,0,1,7-6.95H983.3a57.36,57.36,0,0,1,29.65,8,60.2,60.2,0,0,1,21.63,21.63,57.43,57.43,0,0,1,8,29.65v28.27a57.4,57.4,0,0,1-8,29.65A60.12,60.12,0,0,1,1013,656.69a57.36,57.36,0,0,1-29.65,8H935.59A7,7,0,0,1,928.64,657.76Z"
                transform="translate(-452.38 -517.56)"
              />
              <rect
                class="cls-1"
                x="637.52"
                width="95.31"
                height="37.21"
                rx="6.95"
              />
              <rect
                class="cls-1"
                x="677.3"
                y="37.21"
                width="15.85"
                height="73"
              />
              <rect
                class="cls-1"
                x="637.52"
                y="110.22"
                width="95.31"
                height="37.21"
                rx="6.95"
              />
              <path
                class="cls-2"
                d="M651.45,599.76l35.48.12a5.76,5.76,0,0,0,5.35-8l-17.82-43.36a5.77,5.77,0,0,0-10.67,0l-17.65,43.24A5.76,5.76,0,0,0,651.45,599.76Z"
                transform="translate(-452.38 -517.56)"
              />
              <path
                d="M1238.85,524.79a7,7,0,0,1,6.94-6.95h94.46a7,7,0,0,1,4.91,11.86L1300,574.87a7,7,0,0,0-.74,9l49.93,69.91a6.94,6.94,0,0,1-5.65,11h-97.73a7,7,0,0,1-6.94-7"
                transform="translate(-452.38 -517.56)"
              />
              <path
                d="M1284.54,590.32l-35.85,35.85a6.92,6.92,0,0,0-2,4.91V650a7,7,0,0,0,6.95,6.94h74.94a6.94,6.94,0,0,0,5.65-11L1295.1,591.2A6.94,6.94,0,0,0,1284.54,590.32Z"
                transform="translate(-452.38 -517.56)"
              />
              <path
                class="cls-2"
                d="M1283.89,598l-28.39,28.4a5.5,5.5,0,0,0-1.61,3.89v14.95a5.5,5.5,0,0,0,5.5,5.5h59.35a5.5,5.5,0,0,0,4.48-8.7l-31-43.34A5.5,5.5,0,0,0,1283.89,598Z"
                transform="translate(-452.38 -517.56)"
              />
            </svg>
          </div>
          <button class="info_block__store_map_btn">Карта магазинов</button>
          <div class="info_block__contacts">
            <p class="contacts__txt">Контакты</p>
            <div class="contacts__phone_block">
              <a class="contacts__phone" href="tel:+7(800)000-00-00">
                +7(800)000-00-00
              </a>
            </div>
            <div class="contacts__mail_block">
              <a class="contacts__mail" href="mailto:hardik_info@yandex.ru">
                hardik_info@yandex.ru
              </a>
            </div>
            <div class="contacts__soc_network">
              <a class="soc_network__btn" href="https://youtube.com/">
                <i class="fab fa-youtube"></i>
              </a>
              <a class="soc_network__btn" href="https://vk.com/">
                <i class="fab fa-vk"></i>
              </a>
              <a class="soc_network__btn" href="https://ok.ru/">
                <i class="fab fa-odnoklassniki"></i>
              </a>
              <a class="soc_network__btn" href="https://telegram.org/">
                <i class="fab fa-telegram"></i>
              </a>
              <a class="soc_network__btn" href="https://instagram.com/">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="soc_network__btn" href="https://facebook.com/">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item";

import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, A11y, Autoplay]);

export default {
  name: "Home",
  data() {
    return {
      banners: [
        "./img/banners/Slide(2Var).jpg",
        "./img/banners/SlideNum2.jpg",
        "./img/banners/SlideNum3.jpg",
      ],
      vendors: [
        ["/img/vendors/asus.png", "/img/vendors/lenovo.jpg"],
        ["/img/vendors/apple.png", "/img/vendors/xiaomi.png"],
        ["/img/vendors/samsung.jpg", "/img/vendors/lg.png"],
        ["/img/vendors/kingston.png", "/img/vendors/hp.png"],
      ],
      items: [],
      modules: [],
    };
  },
  created() {
    axios.get("/api/items/get_main_page_items").then((res) => {
      this.items = res.data;
      console.log(this.items);
    });
    axios.get("/api/modules/get_modules").then((res) => {
      this.modules = res.data;
    });
  },
  components: {
    Swiper,
    SwiperSlide,
    Item,
  },
};
</script>
<style>
.homePage {
  margin-top: 61px;
}
.swiperModule {
  padding-top: 10px;
}
#banners_swiper {
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #05050507;
}
#offer__items_swiper {
  padding: 10px 0 35px 0;
}
.swiperImg {
  width: 100%;
  border-radius: 10px;
}
.swiper-pagination-bullet-active {
  background: #ff4000;
}
.offers_name {
  padding: 10px;
  margin: 10px 0;
}
.fa-fire {
  color: #ff4000;
  text-shadow: 0 0 10px #ff4000aa;
}
/* .fa-fire::after {
  opacity: 0.9;
  color: #ff4000;
} */
.offer {
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
  box-shadow: 0 0 10px 5px #05050508;
  border-radius: 10px;
}
.vendor_img {
  width: 80%;
  height: 70px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #05050508;
  padding: 15px 20px;
}
.offer__new {
  height: 280px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px 5px #05050508;
}
.new__name {
  font-size: 1.2em;
  margin: 5px;
  widows: 100%;
}
.new__some_info {
  font-size: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  margin: 5px;
  color: #05050580;
}
.new__img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}
footer {
  background: #f5f5f6;
  border-radius: 10px 10px 0 0;
  margin-top: 10px;
  padding: 20px 0 0 0;
}
.footer__subscribe_block {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.subscribe_block__subscribe_text {
  margin: 20px 0;
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 0;
}
.subscribe_block__subscribe_input {
  border-radius: 10px;
  border: none;
  padding: 13px;
  font-size: 1em;
  margin: 20px 10px;
  box-shadow: 0 0 10px 5px #05050507;
  outline: none;
}
.subscribe_block__subscribe_btn {
  border-radius: 10px;
  border: none;
  padding: 13px;
  background: #ff4000cc;
  color: #fff;
  font-size: 1.1em;
  margin: 20px 10px;
  margin-top: 0;
  box-shadow: 0 0 10px 5px #ff400020;
}
.footer__info_block {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  background: #333;
}
.info_block__footer_logo {
  display: flex;
  justify-content: center;
}
.footer_logo__svg {
  align-self: flex-start;
  width: 50%;
  margin: 10px;
}
.footer_logo__svg {
  fill: #f5f5f5;
}
.footer_logo__svg .cls-2 {
  fill: #333;
}
.info_block__store_map_btn {
  border-radius: 10px;
  border: none;
  font-size: 1.1em;
  padding: 13px;
  background: #444;
  color: #fff;
  margin: 20px 10px;
  box-shadow: 0 0 10px 5px #05050520;
}
.info_block__contacts {
  color: #f5f5f5;
}
.contacts__txt {
  margin-top: 10px;
  font-size: 1.8em;
  margin-bottom: 15px;
  font-weight: 500;
}
.contacts__phone,
.contacts__mail {
  margin-top: 0;
  font-size: 1.4em;
  margin-left: 10px;
  color: #f5f5f5;
}
.contacts__phone_block {
  margin: 10px 0;
}
.contacts__mail_block {
  margin: 10px 0;
}
.contacts__soc_network {
  margin: 25px 0 20px 0;
  display: flex;
  justify-content: space-around;
}
.soc_network__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.4em;
  width: 50px;
  height: 50px;
  text-align: center;
  color: #f5f5f5;
  background: linear-gradient(#444, #555, #444);
  box-shadow: 0 0 10px 5px #05050520;
}
</style>
