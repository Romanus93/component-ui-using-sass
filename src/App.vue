<template>
  <div class="#app">
    <nav class="nav">
      <router-link to="/">Card UI</router-link> |
      <router-link to="/TextUi">Text UI</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.flex {
  display: flex;
}

* {
  box-sizing: border-box;
}

html {
  width: 100vw;
  /* height: 100vh; */
}

body {
  width: 100%;
  max-width: 100%;
  /* height: 100%; */
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

header,
section,
nav,
article,
footer,
aside {
  display: block;
}

.nav {
  height: 10vh;
  padding-top: 3vh;
}
</style>