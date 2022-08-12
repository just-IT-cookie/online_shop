<template>
  <div class="homePage">
    <swiper class="banner_swiper" :pagination="{}" :space-between="50">
      <swiper-slide v-for="banner in banners" :key="banner">
        <img class="banner_img" :src="banner" alt="" />
      </swiper-slide>
    </swiper>
    <div class="module orders">
      <swiper
        class="order_slider"
        :free-mode="true"
        :free-mode-momentum-ratio="0.6"
        :free-mode-momentum-velocity-ratio="1"
        :slidesPerView="'auto'"
      >
        <swiper-slide class="order_slide" v-for="order in orders" :key="order">
          <div class="info_about_order">
            <img class="order_img" :src="order" />
            <div class="status_of_order">
              <h3 class="num_of_order">Заказ №12345678</h3>
              <p class="status_of_order_txt">
                Статус заказа: <strong>оформлен</strong>
              </p>
              <button class="more_btn">Подробнее...</button>
            </div>
          </div>
        </swiper-slide>
        <template v-if="orders.length <= 1">
          <swiper-slide
            class="order_slide"
            v-for="order in orders"
            :key="order"
          >
            <div class="info_about_order">
              <div class="empty_block_of_order">
                <h3 class="no_orders_phrase">Заказов больше нет</h3>
                <p class="alternate_offer">
                  Нажмите, чтобы перейти в Каталог, и сделать новый заказ!
                </p>
                <button class="to_new_order">Вперёд, к новым заказам!</button>
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
    <loader url="/api/modules/get_modules">
      <template v-slot="{ data }">
        <div class="module" v-for="(_module, index) in data" :key="_module._id">
          <h2 class="name_of_module">{{ _module.name }}</h2>
          <swiper
            :key="index"
            :free-mode="true"
            :free-mode-momentum-ratio="0.6"
            :free-mode-momentum-velocity-ratio="1"
            :slidesPerView="'auto'"
            :space-between="15"
            :centerInsufficientSlides="true"
            :slidesOffsetAfter="20"
          >
            <swiper-slide
              class="item_slide"
              v-for="item in items.filter(
                (item) => item.module_locating === _module.id_name
              )"
              :key="item._id"
            >
              <item :itemData="item"></item>
            </swiper-slide>
          </swiper>
        </div>
      </template>
    </loader>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item";
import Loader from "@/components/Loader";

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
        "./img/banners/Banner.png",
        "./img/banners/Banner2.jpg",
        "./img/banners/Banner3.png",
      ],
      vendors: [
        ["/img/vendors/asus.png", "/img/vendors/lenovo.jpg"],
        ["/img/vendors/apple.png", "/img/vendors/xiaomi.png"],
        ["/img/vendors/samsung.jpg", "/img/vendors/lg.png"],
        ["/img/vendors/kingston.png", "/img/vendors/hp.png"],
      ],
      orders: [
        ["/img/items/asus-rog-strix-g15-g512lv-hn230-cernyj-100763991-1.png"],
        // ["/img/items/iphone_12_pro.png"],
        // ["/img/items/TV_Samsung.png"],
      ],
      items: [],
      modules: [],
    };
  },
  created() {
    axios.get("/api/items/get_main_page_items").then((res) => {
      this.items = res.data;
    });
    // axios.get("/api/modules/get_modules").then((res) => {
    //   this.modules = res.data;
    // });
  },
  components: {
    Swiper,
    SwiperSlide,
    Item,
    Loader,
  },
};
</script>
<style>
.banner_swiper {
  padding: 10px;
}
.banner_img {
  width: calc(100vw - 20px);
  border-radius: 10px;
}
.banner_swiper > .swiper-pagination {
  bottom: 20px;
}
.swiper-pagination-bullet {
  background: #050505;
  margin: 5px;
}
.module {
  min-height: 153px;
  margin: 15px 10px;
  background: #fdfdfd;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s ease-in-out;
}
.name_of_module {
  padding: 5px;
  margin: 0;
}
.orders {
  margin-top: 0;
  padding: 0 0 10px 0;
}
.order_slide {
  width: 100%;
}
.order_img {
  position: relative;
  width: 130px;
  height: 100px;
  padding: 5px;
  object-fit: contain;
}
.info_about_order {
  display: flex;
  justify-content: space-around;
  padding: 20px 0 10px 0;
}

.empty_block_of_order {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
}
.empty_block_of_order > * {
  margin: 5px;
}
.no_orders_phrase {
  font-weight: bold;
}
.alternate_offer {
  font-size: 0.85em;
  max-width: 230px;
  color: #050505dd;
}
.to_new_order {
  background: #ffc83d;
  font-size: 0.9em;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0 0 0;
}

.num_of_order {
  margin: 0 0;
}
.status_of_order {
  width: 180px;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}
.status_of_order_txt {
  line-height: 1.4em;
  margin: 10px 0 10px 0;
}
.more_btn {
  align-self: flex-end;
  border: none;
  font-weight: bold;
  background: #f0f0f0;
  color: #050505f0;
  border-radius: 5px;
  padding: 10px;
}
.item_slide {
  width: 140px;
}
</style>
