<template>
  <article class="card">
    <div class="card__image">
      <a href="#" :aria-label="info"></a>
    </div>
    <div class="card__info">
      <div class="label">Card Label</div>
      <h3 class="title">Card Title</h3>
      <div class="description">
        <span>Hilight</span>
        <span>cross out</span>
      </div>
    </div>
    <div class="card__rating flex">
      <div class="rating">별점</div>
      <div class="comment">Lorem ipsum</div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      info: "Roasted Bean",
      item: "",
    };
  },
};
</script>

<style scoped>
.card {
  border: 5px solid orange;
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

.card__info .label {
  border: 1px solid salmon;
  height: 2em;
  line-height: 1.5em;
}

.card__info .title {
  border: 1px solid salmon;
  height: 3.5em;
  line-height: 1.5em;
}

.card__info .description {
  height: 2em;
  line-height: 1.5em;
}

.label,
.title,
.description,
.rating,
.comment {
  padding: 2px 5px;
}

.card__rating {
  justify-content: center;
  flex-direction: column;
}

.card__rating .rating {
  padding-top: calc(1.5em);
  padding-bottom: calc(1.5em);
  height: 4em;
}

.card__rating .comment {
  height: auto;
  line-height: 1.5em;
}
</style>