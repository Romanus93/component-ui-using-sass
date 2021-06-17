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

html,
body {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

ul,
li,
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

a {
  cursor: pointer;
  color: #000;
}

.text--limit-oneline {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>