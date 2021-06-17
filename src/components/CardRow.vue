<template>
  <li class="row-card-container">
    <a class="card" :href="card.to">
      <div class="card__image">
        <span aria-label="roasted bean"></span>
      </div>
      <div class="card-info-rating">
        <div class="card__info">
          <h3 class="title">
            {{ card.title }}
          </h3>
          <p class="comment" v-if="card.isComment">
            {{ card.comment }}
          </p>
        </div>
        <div class="card__rating" v-if="card.rating">
          <div class="rating">
            <button>x</button><button>x</button><button>x</button
            ><button>x</button><button>x</button>
          </div>
          <span class="bar">|</span>
          <span class="user">{{ card.author }}</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "CardRow",
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.row-card-container {
  width: 100%;
  border: 1px solid blue;
}

.row-card-container .card {
  display: block;
  position: relative;
  margin-right: 5px;
  left: 2.5px;
  top: 2.5px;
  margin-bottom: 5px;
  border: 1px solid black;
}

.card .card__image {
  width: 40%;
  display: inline-block;
  vertical-align: bottom;
}

.card .card__image > span {
  width: 100%;
  background-image: url("~@/assets/brown-264289_1280.jpg");
  background-position: 62%;
  background-size: cover;
  display: block;
}

.card .card__image > span:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card-info-rating {
  width: 60%;
  float: right;
  padding: 5px;
  height: 100%;
}

.card .card__info {
  height: 60%;
}

.card__info .title {
  line-height: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__info .comment {
  border: 1px salmon solid;
  margin-top: 1em;
  /* ie지원 */
  overflow: hidden;
  line-height: 1.2em;
  max-height: 4.8em;
  word-break: break-all;
  position: relative;
  margin-right: 2px;
  padding-right: 9px;
}

.card__info .comment:before {
  content: "...";
  position: absolute;
  right: 0;
  bottom: 0;
}

.card-info-rating .card__rating {
  position: absolute;
  bottom: 5px;
  border: 1px blue solid;
}

.card-info-rating .card__rating .rating button {
}

.card-info-rating .card__rating .rating button:nth-last-child(1) {
}

.card-info-rating .card__rating div {
  display: inline-block;
}

@media screen and (min-width: 1000px) {
  .card__info .comment {
    -webkit-line-clamp: 4;
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .card__info .comment {
    max-height: 3.6em;
  }
}

@media screen and (max-width: 800px) {
  .card__info .comment {
    max-height: 7.2em;
  }

  .card__info .comment:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white; /* 배경색과 동일하게 적용 */
  }
}

@media screen and (max-width: 650px) {
  .card__info .comment {
    max-height: 6em;
  }
}
</style>