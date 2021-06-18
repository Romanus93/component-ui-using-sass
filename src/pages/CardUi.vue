<template>
  <div class="main">
    <section>
      <h2>col - card</h2>
      <ul class="cards--col">
        <card-col v-for="item in items" :key="item.id" :card="item" />
      </ul>
    </section>
    <section>
      <h2>row - card</h2>
      <ul class="cards--row">
        <card-row v-for="item in items" :key="item.id" :card="item" />
      </ul>
    </section>
  </div>
</template>

<script>
import UserRating from "../components/UserRating.vue";
import CardCol from "../components/CardCol.vue";
import CardRow from "../components/CardRow.vue";

export default {
  name: "CardUi",
  components: {
    CardCol,
    CardRow,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          imgUrl: "/static/images/brown-264289_1280.jpg",
          label: "card label",
          title: "🤗Roasted Bean",
          highlight: "highlight",
          crossOut: "crossOut",
          isComment: true,
          isRating: true,
          comment:
            "☕The Coffee Bean & Tea Leaf is an American coffee chain founded in 1963. It is owned and operated by Jollibee Foods Corporation, which has its corporate headquarters in Pasig City, Philippines. As of2017, the chain has over 1,000 self-owned and franchised stores inthe United States and 31 other countries.The Coffee Bean & Tea Leafis an American coffee chain founded in 1963. It is owned andoperated by Jollibee Foods Corporation, which has its corporateheadquarters in Pasig City, Philippines. As of 2017, the chain hasover 1,000 self-owned and franchised stores in the United States and31 other countries.",
          rating: 5,
          author: "author",
          to: "/#",
        },
        {
          id: 2,
          imgUrl: "/static/images/brown-264289_1280.jpg",
          label: "card label",
          title:
            "The Coffee Bean & Tea Leaf is an American coffee chain founded in 1963.",
          highlight: "highlight",
          crossOut: "crossOut",
          isComment: false,
          comment: "",
          isRating: true,
          rating: 4,
          author: "author",
          to: "/#",
        },
        {
          id: 3,
          imgUrl: "/static/images/brown-264289_1280.jpg",
          label: "card label",
          title: "🤗Roasted Bean",
          highlight: "highlight",
          crossOut: "crossOut",
          isComment: false,
          comment: "",
          isRating: false,
          rating: 0,
          author: "author",
          to: "/#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/cardUi.scss";
</style>