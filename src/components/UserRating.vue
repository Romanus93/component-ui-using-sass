<template>
  <div class="rating-container">
    <span class="rating" v-for="i in 5" :key="i" :class="activeDot(i)">
      <i class="fas fa-thumbs-up"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "UserRating",
  props: {
    rating: {
      type: Number,
    },
  },
  computed: {
    activeDot: function () {
      return function (i) {
        return i <= this.rating ? "on" : "off";
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/userRating.scss";
</style>