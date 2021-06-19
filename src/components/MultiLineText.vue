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
        :style="colorText"
      ></textarea>
      <span class="characters-counter">
        {{ counterCharacters }}
      </span>
    </div>
    <button
      class="btn--save"
      v-if="textarea.isButton"
      :disabled="isDisabledBtn"
      type="button"
      @click="saveTexts"
    >
      Save
    </button>
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
      characters: this.textarea.text,
    };
  },
  computed: {
    counterCharacters: function () {
      let lengthCharacters = this.characters.length;
      let limitCharacters = 500;
      return limitCharacters - lengthCharacters;
    },
    colorText: function () {
      let color =
        this.textarea.readonly && this.textarea.disabled ? "red" : "black";
      return `color: ${color}`;
    },
    isDisabledBtn: function () {
      return this.characters.length === 0 ? true : false;
    },
  },
  methods: {
    saveTexts() {
      let infoText = `${this.characters} 이 저장되었습니다.`;
      alert(infoText);
      this.characters = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/multiLineText.scss";
</style>