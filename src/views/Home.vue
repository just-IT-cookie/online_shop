<template>
  <div class="homePage">
    <div class="swiperModule">
      <swiper
        id="banners_swiper"
        :speed="350"
        :loop="true"
        :space-between="50"
        :autoplay="{ delay: 5000 }"
        :pagination="{ dynamicBullets: true }"
      >
        <swiper-slide v-for="banner in banners" :key="banner">
          <img class="swiperImg" :src="banner" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="day_items_block">
      <div class="offer">
        <h2 class="offers_name">Товары дня!</h2>
        <i class="fas fa-fire fa-2x"></i>
      </div>
      <div class="day_items">
        <swiper
          id="day_items_swiper"
          :slides-per-view="2"
          :space-between="10"
          :autoplay="{ delay: 5000 }"
          :pagination="{}"
        >
          <swiper-slide v-for="item in items" :key="item">
            <Item
              :image="item.image"
              :category="item.category"
              :name="item.name"
              :price="item.price"
              :old_price="item.old_price"
            ></Item>
          </swiper-slide>
        </swiper>
      </div>
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
        "/img/banners/Slide(2Var).jpg",
        "/img/banners/SlideNum2.jpg",
        "/img/banners/SlideNum3.jpg",
      ],
      items: [],
    };
  },
  created() {
    axios.get("/api/items/get_main_page_items").then((res) => {
      this.items = res.data;
      console.log(this.items);
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
#day_items_swiper {
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
</style>
