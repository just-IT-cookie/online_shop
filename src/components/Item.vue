<template>
  <div class="shop_item">
    <router-link :to="{ name: 'Item_page', params: { itemID: itemData._id } }">
      <img
        class="item_image"
        :src="'/api/images/' + itemData.image[0]"
        alt=""
      />
      <p class="item_category">{{ itemData.category }}</p>
      <p class="item_name">{{ itemData.vendor + " " + itemData.name }}</p>
      <div class="item_price_block">
        <div class="old_price_block" v-if="itemData.old_price">
          <p class="item_old_price">
            {{
              itemData.old_price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
            }}₽
          </p>
          <p class="item_difference">
            -{{ rounding(itemData.old_price, itemData.price) }}%
          </p>
        </div>
        <p class="item_price">
          {{ itemData.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") }}₽
        </p>
      </div>
    </router-link>
    <div class="item_action_block">
      <button class="item_comparison_btn">
        <i class="fad fa-balance-scale-right"></i>
      </button>
      <button class="item_buy_btn" @click="add_item_in_cart">
        <i class="fad fa-shopping-cart"></i>
        <!-- <span v-if="$route.name === 'Home'" class="buy_txt">Купить</span> -->
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    itemData: Object,
  },
  methods: {
    rounding(old_price, price) {
      return Math.abs(100 - 100 / (Number(old_price) / Number(price))).toFixed(
        0
      );
    },
    add_item_in_cart() {
      this.$store.commit("add_item_id", this.itemData._id);
    },
  },
};
</script>

<style scoped>
.shop_item {
  width: 140px;
  padding: 10px 15px;
}
.shop_item > a {
  all: unset;
  color: inherit;
}
.item_image {
  width: calc(100% - 10px);
  padding: 0 5px;
  height: 100px;
  object-fit: contain;
}
.item_category {
  font-size: 0.8em;
  color: #05050560;
  margin: 5px 0 5px 0;
}
.item_name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  margin: 5px 0;
}
.item_price_block {
  margin: 10px 0;
  min-height: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.old_price_block {
  display: flex;
  font-size: 0.8em;
}
.item_old_price {
  color: #05050580;
  text-decoration: line-through;
  margin: 0;
}
.item_difference {
  font-size: 0.8em;
  margin: 0;
  background: #ffce1b;
  border-radius: 10px;
  padding: 2px;
  margin-left: 3px;
}
.item_price {
  font-size: 1.1em;
  margin: 0;
}
.item_action_block {
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  margin: 5px 0;
}
.item_comparison_btn {
  width: 40%;
  border-radius: 10px;
  font-size: 1.1em;
  padding: 10px 5px;
  border: none;
  background: #aee070;
}
.item_buy_btn {
  width: 40%;
  padding: 10px 5px;
  border-radius: 10px;
  font-size: 1.1em;
  border: none;
  color: #f0f0f0;
  background: #050505;
}
</style>
