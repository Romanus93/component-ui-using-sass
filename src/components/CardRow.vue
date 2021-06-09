<template>
  <article class="card flex">
    <div class="card__image">
      <a href="#" aria-label="lonely man"></a>
    </div>
    <div class="card__info">
      <div class="title">Card Title</div>
      <div class="comment">Lorem ipsum dolor sit,</div>
      <div class="card__rating">
        <div class="rating">별점</div>
        <div class="user">User Name</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  flex-direction: row;
  border: 5px solid orange;
  width: 48%;
}

.card__image {
  width: 40%;
}

.card__image > a {
  width: 100%;
  background-image: url("/src/assets/lonely-814631_1280.jpg");
  background-position: 62%;
  background-size: cover;
  display: block;
}

.card__image > a:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card__info {
  width: 60%;
}

.card > div {
  border: 1px solid black;
}
</style>