<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Card UI</router-link> |
      <router-link to="/TextUi">Text UI</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>