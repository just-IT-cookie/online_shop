<template>
  <Preloader></Preloader>
  <Head></Head>
  <router-view />
  <BottomMenu></BottomMenu>
</template>
<script>
import Head from "./components/Head";
import Preloader from "./components/Preloader";
import BottomMenu from "./components/BottomMenu";

export default {
  components: { Head, BottomMenu, Preloader },
};
</script>
<style></style>
