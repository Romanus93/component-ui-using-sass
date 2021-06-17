<template>
  <li class="col-card-contaier">
    <article class="card">
      <div class="card__image">
        <a href="#" :aria-label="info"></a>
      </div>
      <div class="card__info">
        <p class="label">{{ card.label }}</p>
        <h3 class="title">{{ card.title }}</h3>
        <div class="description">
          <span>{{ card.highlight }}</span>
          <span>|</span>
          <span>{{ card.crossOut }}</span>
        </div>
      </div>
      <div class="card__rating" v-if="card.rating || card.isComment">
        <div class="ch">
          <div class="rating">{{ card.rating }}</div>
          <p class="comment" v-if="card.isComment">{{ card.comment }}</p>
        </div>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: "cardCol",
  data() {
    return {
      info: "Roasted Bean",
    };
  },
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.col-card-contaier {
  width: 100%;
  position: relative;
  left: 2.5px;
  padding-right: 5px;
  padding-bottom: 5px;
  bottom: -2.5px;
}

.card {
  border: 1px solid;
  margin-right: 5px;
  width: 100%;
}

.card__image > a {
  width: 100%;
  background-image: url("~@/assets/brown-264289_1280.jpg");
  background-position: 62%;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
}

.card__image > a:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card__info {
  height: 96px;
  position: relative;
}

.card__info .label {
  border: 1px solid salmon;
  padding: 5px;
}

.card__info .title {
  border: 1px solid salmon;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
}

.card__info .description {
  position: absolute;
  bottom: 3px;
  padding: 0 5px;
}

.label,
.title,
.description,
.rating,
.comment {
  /* padding: 2px 5px; */
}

.card__rating {
  height: 56px;
  width: 100%;
  padding: 0px 5px 5px 5px;
  display: table;
  table-layout: fixed;
}

.card__rating .ch {
  display: table-cell;
  vertical-align: middle;
}

.card__rating .rating {
}

.card__rating .comment {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 800px) {
  .card__info .comment {
    -webkit-line-clamp: 4;
  }
}

/* <div class="card__rating" v-if="card.rating || card.isComment">
        <div class="ch">
          <div class="rating">{{ card.rating }}</div>
          <p class="comment" v-if="card.isComment">{{ card.comment }}</p>
        </div>
      </div> */
</style>