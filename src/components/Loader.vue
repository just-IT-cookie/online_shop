<template>
  <div class="loader">
    <transition-group name="fade">
      <slot key="0" v-if="error" name="error">
        Ошибка загрузки данных. {{ error }}
      </slot>
      <slot key="1" class="loading" v-else-if="loading" name="loading">
        <div class="loading_block">
          <span class="dot"></span>
        </div>
      </slot>
      <slot key="2" class="data" v-else :data="serverData">
        <span>Данные успешно загружены</span>
      </slot>
    </transition-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Loader",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      serverData: [],
      loading: true,
      error: false,
    };
  },
  created() {
    axios
      .get(this.url)
      .then((res) => {
        this.loading = false;
        this.serverData = res.data;
      })
      .catch((err) => {
        this.error = err;
      });
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: 0.5s ease;
}
.slide-fade-leave-active {
  transition: 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
@keyframes load {
  from {
    background: black;
    width: 10px;
    height: 10px;
  }
  50% {
    background: #ff4000;
    width: 30px;
    height: 30px;
  }
  to {
    background: black;
    width: 10px;
    height: 10px;
  }
}

.loader {
  position: relative;
  height: 30px;
}
.loading_block {
  background: #fdfdfd;
  border-radius: 10px;
  padding: 10px 0;
  height: 330px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.dot {
  display: block;
  background: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: load 2s ease-in-out infinite;
}
</style>
