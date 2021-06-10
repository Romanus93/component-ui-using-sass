<template>
  <main class="main">
    <section>
      <h2>col - card</h2>
      <ul class="card-container card-container--col flex">
        <li class="card" v-for="item in arrCol" :key="item.id">
          <card-col></card-col>
        </li>
      </ul>
    </section>
    <section>
      <h2>row - card</h2>
      <ul class="card-container card-container--row flex">
        <li class="card" v-for="item in arrRow" :key="item.id">
          <card-row></card-row>
        </li>
      </ul>
    </section>
  </main>
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
      arrCol: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      arrRow: [{ id: 1 }, { id: 2 }, { id: 3 }],
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
  height: 90vh;
}

h2 {
  line-height: 10vh;
}

.main .card-container {
  width: 100%;
  /* padding: 5px;
  border: 5px salmon solid; */
}

.card-container--col {
  justify-content: flex-start;
}

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
</style>