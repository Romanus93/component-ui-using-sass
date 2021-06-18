<template>
  <ul class="flex card-container">
    <li class="card" v-for="card in exItemlist">
      <button class="card__action-btn">
        <i class="far fa-heart"></i>
      </button>
      <div
        class="card__img"
        v-bind:style="{ 'background-image': 'url(' + card.image + ')' }"
      ></div>
      <div class="card__info flex flex--text-position">
        <div class="title">{{ card.title }}</div>
        <div class="info">{{ card.description }}</div>
      </div>
      <div class="card__rating flex flex--text-position">
        <div class="rating">
          {{ card.rating }}
        </div>
        <div class="comment">{{ card.comment }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CardUi",
  data() {
    return {
      exItemlist: [
        {
          image: "/src/assets/brown-264289_1280.jpg",
          title: "제목",
          description: "설명",
          rating: "icon",
          comment: "댓글",
        },
        {
          image: "/src/assets/brown-264289_1280.jpg",
          title: "제목",
          description: "설명",
          rating: "icon",
          comment: "댓글",
        },
        {
          image: "/src/assets/brown-264289_1280.jpg",
          title: "제목",
          description: "설명",
          rating: "icon",
          comment: "댓글",
        },
        {
          image: "/src/assets/brown-264289_1280.jpg",
          title: "제목",
          description: "설명",
          rating: "icon",
          comment: "댓글",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  width: 100%;
  border: 5px solid red;
}

.card {
  border: 2px solid royalblue;
  width: 25%;
  position: relative;
}

.card__action-btn {
  position: absolute;
  z-index: 80;
  top: 3px;
  right: 3px;
}

.card__img {
  border: 1px solid orange;
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: 62%;
}

.card__info {
  border: 1px solid orange;
  height: 96px;
}

.card__rating {
  border: 1px solid orange;
  height: 56px;
}

.flex--text-position {
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  align-items: start;
}

@media only screen and (min-width: 820px) {
  .card {
    padding-left: 0.5%;
    right: 0.25%;
  }
}

@media only screen and (max-width: 820px) {
  .card-container {
    flex-wrap: wrap;
  }

  .card {
    width: 50%;
    padding-left: 1%;
    right: 0.5%;
  }
}
</style>

