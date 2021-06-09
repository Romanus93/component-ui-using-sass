<template>
  <article class="card">
    <div class="card__image">
      <a href="#" aria-label="lonely man"></a>
    </div>
    <div class="card__info">
      <div class="label">Card Label</div>
      <div class="title">Card Title</div>
      <div class="description">
        <span>Hilight</span>
        <span>cross out</span>
      </div>
    </div>
    <div class="card__rating">
      <div class="rating">별점</div>
      <div class="comment">Lorem ipsum dolor sit,</div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: 5px solid orange;
  width: 30%;
}

.card__image > a {
  width: 100%;
  background-image: url("~@/assets/lonely-814631_1280.jpg");
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
}

.card__rating {
  height: 56px;
}

.card > div {
  border: 1px solid black;
}
</style>