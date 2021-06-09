<template>
  <main class="main">
    <div class="card-col-container flex">
      <card-col></card-col>
      <card-col></card-col>
      <card-col></card-col>
    </div>
    <div class="card-row-container flex">
      <card-row></card-row>
      <card-row></card-row>
      <card-row></card-row>
    </div>
    <div class="check">hi</div>
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
      arr: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  border: 2px solid blueviolet;
}

.main .card-col-container {
  width: 100%;
  padding: 5% 5%;
  justify-content: space-between;
  border: 1px salmon solid;
}

.main .card-row-container {
  width: 100%;
  padding: 5% 5%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  border: 1px salmon solid;
}

.check {
  width: 250px;
  height: 250px;
  background-size: cover;
  background-image: url("/src/assets/lonely-814631_1280.jpg");
}
</style>