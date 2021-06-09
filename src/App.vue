<template>
  <div>
    <nav class="nav">
      <router-link to="/">Card UI</router-link> |
      <router-link to="/TextUi">Text UI</router-link>
    </nav>
    <router-view></router-view>
    <sass-vue></sass-vue>
    <div class="head">
      <h1 class="text">Hi I'm scss</h1>
    </div>
  </div>
</template>

<script>
import SassVue from "./components/SassVue.vue";

export default {
  components: {
    SassVue,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";
</style>