<template>
  <li class="multi-line-text-container">
    <div
      class="multi-line-text"
      :class="{ 'multi-line-text-with-btn': textarea.isButton }"
    >
      <textarea
        :placeholder="textarea.placeholder"
        :maxlength="textarea.maxlength"
        v-model="characters"
        :readonly="textarea.readonly"
        :disabled="textarea.disabled"
        rows="5"
        cols="50"
        :style="
          textarea.placeholderColor
            ? { '--placeholder-color': textarea.placeholderColor }
            : {}
        "
      ></textarea>
      <span class="character-counter">
        {{ characterCounter }}
      </span>
    </div>
    <div class="btn-box" v-if="textarea.isButton">
      <button class="btn--save" type="button">Save</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "MultiLineText",
  props: {
    textarea: {
      type: Object,
    },
  },
  created() {
    console.log(this.textarea);
  },
  data() {
    return {
      characters: "",
    };
  },
  computed: {
    characterCounter() {
      let char = this.characters.length;
      let limit = 500;
      return limit - char;
    },
    // disableButton() {
    //   if (this.characters == "입력해주세요.") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  },
};
</script>

<style scoped>
.multi-line-text-container {
  width: 100%;
  border: 5px solid salmon;
}

.multi-line-text {
  width: 400px;
  margin: 10px auto;
}

.multi-line-text textarea {
  resize: none;
}

textarea::placeholder {
  color: var(--placeholder-color);
}

.multi-line-text .counter {
}

.btn-box {
  width: 400px;
  margin: 0 auto;
  border: 5px seagreen solid;
}

.btn--save {
  width: 50px;
  height: 30px;
}

.multi-line-text-with-btn {
}
</style>