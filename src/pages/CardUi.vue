<template>
  <div class="main">
    <section>
      <h2>col - card</h2>
      <ul class="card-container card-container--col flex">
        <li v-for="item in arrCol" :key="item.id">
          <card-col></card-col>
        </li>
      </ul>
    </section>
    <section>
      <h2>row - card</h2>
      <ul class="card-container card-container--row flex">
        <li v-for="item in arrRow" :key="item.id">
          <card-row></card-row>
        </li>
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
      arrCol: [
        {
          id: 1,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          comment: "comment",
        },
        {
          id: 2,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          comment: "comment",
        },
        {
          id: 3,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          comment: "comment",
        },
        {
          id: 4,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          comment: "comment",
        },
      ],
      arrRow: [
        {
          id: 1,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          writer: "writer",
        },
        {
          id: 2,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          writer: "writer",
        },
        {
          id: 3,
          label: "card label",
          title: "card title",
          description: "card description",
          rating: "rating",
          writer: "writer",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  border: 2px solid blueviolet;
}

.main section {
  width: 100%;
  /* height: 90vh; */
  margin: 0 auto;
}

h2 {
  line-height: 10vh;
  padding-left: 5px;
}

.main .card-container {
  width: 100%;
  /* padding: 5px;
  border: 5px salmon solid; */
}

/* .card-container--col {
  justify-content: flex-start;
} */

section {
  margin: 0;
}

.main section .card-container li {
  padding: 5px;
}

.main section .card-container--col li {
  width: 25%;
  /* border: 5px olivedrab solid; */
}

.main section .card-container--row {
  flex-wrap: wrap;
}

.main section .card-container--row li {
  width: 50%;
  flex-wrap: wrap;
}

@media screen and (max-width: 800px) {
  .card-container--col {
    flex-wrap: wrap;
  }

  .main section .card-container--col li {
    width: 50%;
  }

  .main section .card-container--row li {
    width: 100%;
  }
}
</style>