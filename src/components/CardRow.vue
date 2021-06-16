<template>
  <article class="card flex">
    <div class="card__image">
      <a href="#" aria-label="lonely man"></a>
    </div>
    <div class="card__info">
      <h3 class="title">Card Title</h3>
      <p class="comment">
        The Coffee Bean & Tea Leaf is an American coffee chain founded in 1963.
        It is owned and operated by Jollibee Foods Corporation, which has its
        corporate headquarters in Pasig City, Philippines. As of 2017, the chain
        has over 1,000 self-owned and franchised stores in the United States and
        31 other countries.
      </p>
      <div class="card__rating">
        <div class="rating">
          <button>x</button><button>x</button><button>x</button
          ><button>x</button><button>x</button>
        </div>
        |
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
  border: 5px solid orange;
  width: 100%;
}

.card .card__image {
  width: 40%;
}

.card .card__image > a {
  width: 100%;
  background-image: url("~@/assets/brown-264289_1280.jpg");
  background-position: 62%;
  background-size: cover;
  display: block;
}

.card .card__image > a:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card .card__info {
  padding: 15px;
  width: 60%;
}

.card__info .title {
  height: 3.5em;
  line-height: 1.5em;
}

.card__info .comment {
  height: 7.5rem;
  line-height: 1.5em;
  border: 1px salmon solid;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

.card__info .card__rating {
  border: 1px blue solid;
  height: auto;
  padding-top: 1.5em;
}

.card__info .card__rating .rating {
  /* width: auto; */
}

.card__info .card__rating .rating button {
  margin-right: 0.5em;
}

.card__info .card__rating .rating button:nth-last-child(1) {
  margin-right: 0;
}

.card__info .card__rating div {
  display: inline-block;
}
</style>