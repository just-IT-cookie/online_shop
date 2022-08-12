<template>
  <div v-if="itemData" class="item_page">
    <div class="breadcrumbs">
      {{ itemData.category }}
      <i class="fas fa-long-arrow-alt-right"></i>
      {{ itemData.vendor }}
      <i class="fas fa-long-arrow-alt-right"></i>
      {{ itemData.name }}
    </div>
    <swiper class="item_imgs_swiper" :loop="true" :pagination="{}">
      <swiper-slide v-for="(image, index) in itemData.image" :key="index">
        <img
          class="item_img"
          :src="'/api/images/' + itemData.image[index]"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <div class="fav_and_comp">
      <button>
        <i class="far fa-balance-scale-right"></i>
      </button>
      <button>
        <i class="far fa-heart"></i>
      </button>
    </div>
    <h2 class="item_name">
      {{ itemData.category + " " + itemData.vendor + " " + itemData.name }}
    </h2>
    <div class="price_block">
      <div class="old_price_block" v-if="itemData.old_price">
        <p class="old_price">
          {{
            itemData.old_price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
          }}₽
        </p>
        <p class="item_difference">
          -{{ rounding(itemData.old_price, itemData.price) }}%
        </p>
      </div>
      <p class="price">
        {{ itemData.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") }}₽
      </p>
      <div class="delivery">
        <p>Варианты доставки:</p>
        <p>
          Самовывоз во вторник, 24 авугуста —
          <span class="free">бесплатно</span>
        </p>
        <p>
          Курьером во вторник, 24 авугуста — <span class="free">бесплатно</span>
        </p>
      </div>
      <button @click="add_item_in_cart" class="buy_btn">
        Добавить в корзину
      </button>
    </div>
    <div class="modules">
      <div class="item_module" v-for="module_ in modules" :key="module_">
        <h3 class="item_module_name">{{ module_ }}</h3>
        <div v-if="module_ === 'Характеристики'">
          <div v-for="spec in category_specs" :key="spec">
            <div class="spec_key">
              <p class="name_of_spec">{{ spec }}:</p>
              <p class="spec">{{ itemData.category_specs[spec] }}</p>
            </div>
          </div>
        </div>
        <div v-else-if="module_ === 'Отзывы'">
          <span class="reviews_mark">4.9</span>
          <div class="reviews">
            <div v-for="review in reviews" :key="review" class="review"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, A11y, Autoplay]);

export default {
  name: "Item_page",
  data() {
    return {
      itemData: "",
      modules: [
        "Характеристики",
        "Отзывы",
        "С этим товаром смотрят",
        "Вопросы",
        "Полезные статьи",
      ],
      category_specs: "",
      reviews: "",
    };
  },
  created: function () {
    axios
      .get("/api/items/item_info", { params: { itemID: this.getItemId() } })
      .then((res) => {
        this.itemData = res.data;
        axios
          .get("/api/categories/get_category_specs", {
            params: { name: this.itemData.category },
          })
          .then((res) => {
            this.category_specs = res.data.list_of_spec;
          });
      });
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getItemId() {
      return this.$route.params.itemID;
    },
    rounding(old_price, price) {
      return (100 - 100 / (Number(old_price) / Number(price))).toFixed(0);
    },
    add_item_in_cart() {
      this.$store.commit("add_item_id", this.itemData._id);
    },
  },
};
</script>

<style scoped>
.item_page {
  margin: 5px;
  padding: 15px;
  background: #fafafa;
  border-radius: 10px;
}
.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #050505cc;
  margin: 0 0 10px 0;
  font-size: 0.8em;
}
.breadcrumbs > i {
  margin: 0 5px;
}
.fav_and_comp {
  display: flex;
  position: relative;
  justify-content: space-between;
}
.fav_and_comp > button {
  padding: 5px;
  position: absolute;
  top: -40px;
  font-size: 1.5em;
  border-radius: 50%;
  border: none;
  z-index: 20;
  background: none;
}
.fav_and_comp > button:first-child {
  /* color: #36aa34b0; */
  /* background: #aee07090;
  box-shadow: 0 0 10px 5px #aee07035; */
  left: 0;
}
.fav_and_comp > button:last-child {
  /* color: #ff5050b0; */
  /* background: #fb676740;
  box-shadow: 0 0 10px 5px #fb676720; */
  right: 0;
}
.item_img {
  width: calc(100% - 60px);
  height: 240px;
  object-fit: contain;
  margin: 10px 30px;
  padding-bottom: 20px;
}
.item_name {
  margin: 20px 0;
  font-weight: 500;
}
.price_block {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #05050507;
}
.old_price_block {
  display: flex;
}
.old_price {
  margin: 0;
  font-size: 0.9em;
  text-decoration: line-through;
  color: #05050580;
}
.item_difference {
  font-size: 0.8em;
  margin: 0;
  background: #ffce1b;
  border-radius: 10px;
  padding: 2px 7px;
  margin-left: 3px;
}
.price {
  font-size: 2em;
  margin: 0;
  font-weight: 600;
}
.delivery {
  font-size: 1em;
  line-height: 1.3;
}
.free {
  font-weight: 500;
  color: #29ad2e;
}
.delivery > * {
  margin: 5px 0;
}
.delivery > *:first-child {
  color: #050505bb;
  margin: 10px 0;
}
.buy_btn {
  width: 100%;
  border-radius: 10px;
  font-size: 1.1em;
  border: none;
  color: #f0f0f0;
  background: #050505;
  box-shadow: 0 0 10px 5px #05050520;
  margin: 15px 0 0 0;
  padding: 15px 0;
}
.item_module {
  position: relative;
  padding: 2px 15px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #05050507;
}
.item_module_name {
  font-size: 20px;
  font-weight: 500;
}
.spec_key {
  border-top: 1px solid #f0f0f0;
  padding-bottom: 10px;
}
.name_of_spec {
  font-size: 1.125em;
  margin-bottom: 2px;
}
.spec {
  font-size: 0.95em;
  margin: 0;
  padding: 5px 0;
}
.reviews_mark {
  position: absolute;
  right: 10px;
  top: 25px;
  background: #aee070;
  padding: 2px 5px;
  border-radius: 10px;
}
</style>
