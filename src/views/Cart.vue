<template>
  <div class="cart">
    <h2 class="cart_title">Корзина</h2>
    <div class="cart_body">
      <div class="item" v-for="(item, index) in itemsData" :key="item._id">
        <span class="serial_number">{{ index + 1 }}</span>
        <div>
          <img
            class="item_image"
            :src="'/api/images/' + item.image[0]"
            alt=""
          />
        </div>
        <div class="second_part_of_item_info">
          <div class="price_block">
            <p v-if="item.old_price" class="old_price">
              {{
                item.old_price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
              }}₽
            </p>
            <p class="price">
              {{ item.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") }}₽
            </p>
          </div>
          <p class="name_of_item">
            {{ item.category + " " + item.vendor + " " + item.name }}
          </p>
          <i class="fas"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cart",
  data() {
    return {
      itemsData: [],
      itemIDs: [],
    };
  },
  created() {
    this.itemIDs = this.$store.state.items_ids;
    if (this.itemIDs.length === 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.itemIDs.push(localStorage.key(i));
      }
    }
    this.itemIDs.forEach((id) => {
      axios
        .get("/api/items/item_info", { params: { itemID: id } })
        .then((res) => {
          this.itemsData.push(res.data);
        });
    });
  },
  methods: {
    rounding(old_price, price) {
      return (100 - 100 / (Number(old_price) / Number(price))).toFixed(0);
    },
  },
};
</script>

<style scoped>
.cart {
  margin: 5px;
  padding: 15px;
  background: #fafafa;
  border-radius: 10px;
}
.cart_title {
  margin: 0;
}

.item {
  display: flex;
  align-items: center;
}
.item_image {
  width: 90px;
  height: 95px;
  padding: 15px;
  object-fit: contain;
}

.second_part_of_item_info {
  display: flex;
  flex-direction: column;
}
.price_block {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}
.old_price {
  margin: 0;
  font-size: 0.8em;
  text-decoration: line-through;
  color: #05050580;
  /* align-self: flex-end; */
}
.price {
  font-size: 1.3em;
  margin: 0;
  font-weight: 500;
}
.name_of_item {
  margin: 0;
}
</style>
