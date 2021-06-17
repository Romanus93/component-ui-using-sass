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
import CardCol from "/src/components/CardCol.vue";
import CardRow from "/src/components/CardRow.vue";

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
          label: "card label",
          title: "🤗Roasted Bean",
          highlight: "highlight",
          crossOut: "crossOut",
          isComment: true,
          isRating: true,
          comment:
            "☕The Coffee Bean & Tea Leaf is an American coffee chain founded in 1963. It is owned and operated by Jollibee Foods Corporation, which has its corporate headquarters in Pasig City, Philippines. As of2017, the chain has over 1,000 self-owned and franchised stores inthe United States and 31 other countries.The Coffee Bean & Tea Leafis an American coffee chain founded in 1963. It is owned andoperated by Jollibee Foods Corporation, which has its corporateheadquarters in Pasig City, Philippines. As of 2017, the chain hasover 1,000 self-owned and franchised stores in the United States and31 other countries.",
          rating: "🍗🍗🍗🍗🍗",
          author: "author",
          to: "/#",
        },
        {
          id: 2,
          label: "card label",
          title:
            "The Coffee Bean & Tea Leaf is an American coffee chain founded in 1963.",
          highlight: "highlight",
          crossOut: "crossOut",
          isComment: false,
          comment: "",
          isRating: true,
          rating: "🍗🍗🍗🍗🍗",
          author: "author",
          to: "/#",
        },
        {
          id: 3,
          label: "card label",
          title: "🤗Roasted Bean",
          highlight: "highlight",
          crossOut: "crossOut",
          isComment: false,
          comment: "",
          isRating: false,
          rating: "",
          author: "author",
          to: "/#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  max-width: 100%;
  border: 2px solid blueviolet;
}

.main section {
  width: 90%;
  margin: 0 auto;
}

h2 {
  line-height: 10vh;
  padding-left: 5px;
}

.main section .cards--col {
  border: 1px solid salmon;
  /* width: 100%; */
}

.main section .cards--col li {
  width: 33.33%;
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
}

.main section .cards--row li {
  width: 50%;
  display: inline-block;
}

@media screen and (max-width: 800px) {
  .main section .cards--col li {
    width: 50%;
  }

  .main section .cards--row li {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .main section .cards--col li {
    width: 100%;
  }
}
</style>