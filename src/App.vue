<template>
  <Head></Head>
  <router-view />
  <BottomMenu></BottomMenu>
</template>
<script>
import Head from "./components/Head";
import BottomMenu from "./components/BottomMenu";

export default {
  components: { Head, BottomMenu },
};
</script>
<style></style>
