import Vue from 'vue'
import VueRouter from 'vue-router'
import CardUi from "/src/pages/CardUi.vue";
import TextUi from "/src/pages/TextUi.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "CardUi",
    component: CardUi
  },
  {
    path: "/TextUi",
    name: "TextUi",
    component: TextUi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
