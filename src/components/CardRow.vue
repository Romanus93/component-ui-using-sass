<template>
  <li class="row-card-container">
    <a class="card" :href="card.to">
      <div class="card__image">
        <span :aria-label="card.title" :style="backgroundImg"></span>
      </div>
      <div class="card-info-rating">
        <div class="card__info">
          <h3 class="title">
            {{ card.title }}
          </h3>
          <p class="comment" v-if="card.isComment">
            {{ card.comment }}
          </p>
        </div>
        <div class="card__rating" v-if="card.rating">
          <user-rating :rating="card.rating"></user-rating>
          <span class="bar">|</span>
          <span class="user">{{ card.author }}</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import UserRating from "./UserRating.vue";

export default {
  name: "CardRow",
  components: {
    UserRating,
  },
  props: {
    card: {
      type: Object,
    },
  },
  data() {
    return {
      backgroundImg: `background-image: url(/static/images/brown-264289_1280.jpg);`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/cardRow.scss";
</style>