<template>
  <li class="col-card-contaier">
    <article class="card">
      <div class="card__image">
        <a href="#" :aria-label="card.title" :style="backgroundImg"></a>
      </div>
      <div class="card__info">
        <p class="label">{{ card.label }}</p>
        <h3 class="title">{{ card.title }}</h3>
        <div class="description">
          <span>{{ card.highlight }}</span>
          <span class="bar">|</span>
          <span>{{ card.crossOut }}</span>
        </div>
      </div>
      <div class="card__rating-comment" v-if="card.rating || card.isComment">
        <div>
          <user-rating :rating="card.rating"></user-rating>
          <p class="comment" v-if="card.isComment">{{ card.comment }}</p>
        </div>
      </div>
    </article>
  </li>
</template>

<script>
import UserRating from "./UserRating.vue";
import SassVue from "./SassVue.vue";

export default {
  name: "cardCol",
  components: {
    UserRating,
    SassVue,
  },
  created() {
    console.log(1, this.card.imgUrl);
  },
  data() {
    return {
      info: "Roasted Bean",
      backgroundImg: `background-image: url(${this.card.imgUrl})`,
    };
  },
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/cardCol.scss";
</style>