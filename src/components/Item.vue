<template>
  <div class="shop_item">
    <img class="item__image" :src="'/api/' + image" alt="" />
    <span class="item__category">{{ category }}</span>
    <p class="item__name">
      {{ name }}
    </p>
    <div class="item__buy_block">
      <div class="item__price_block">
        <span class="item__old_price">{{ old_price }}₽</span>
        <span class="item__price">{{ price }}₽</span>
      </div>
      <button class="item__buyBtn"><i class="fal fa-shopping-cart"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    image: String,
    category: String,
    name: String,
    price: String,
    old_price: String,
  },
};
</script>

<style scoped>
.shop_item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  box-shadow: 0 0 10px 5px #05050505;
  border-radius: 10px;
  padding: 20px 0 10px 0;
}
.shop_item > .item__image {
  height: 110px;
  object-fit: contain;
}
.item__category {
  font-weight: 300;
  font-size: 12px;
  align-self: flex-start;
  padding: 10px 15px 3px 15px;
  color: #05050550;
}
.item__name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  height: 34px;
  padding: 0 15px;
  line-height: 18px;
  margin: 0;
}
.item__buy_block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.item__buyBtn {
  font-size: 16px;
  align-self: flex-end;
  padding: 10px 15px;
  margin: 0 15px 0 0;
  border-radius: 10px;
  color: #ff4000;
  /* background: radial-gradient(#050505, #050505dd); */
  background-color: #050505;
  border: none;
  box-shadow: 0 0 5px 2px #05050520;
}
.item__price_block {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0 0 15px;
}
.item__old_price {
  color: #05050550;
  align-self: flex-start;
  text-decoration: line-through;
  font-size: 12px;
  font-weight: 300;
}
.item__price {
  font-weight: 700;
  align-self: flex-start;
  font-size: 17px;
}
</style>
