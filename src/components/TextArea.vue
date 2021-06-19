<template>
  <li class="textarea-container">
    <div class="textarea" :style="">
      <textarea
        :placeholder="textarea.placeholder"
        :maxlength="textarea.maxlength"
        v-model="characters"
        :readonly="textarea.readonly"
        :disabled="textarea.disabled"
        rows="5"
        cols="50"
        :style="changeTextsColor"
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
  name: "TextArea",
  props: {
    textarea: {
      type: Object,
    },
  },
  data() {
    return {
      characters: this.textarea.text,
    };
  },
  computed: {
    counterCharacters: function () {
      let charactersLength = this.characters.length;
      let charactersLimit = 500;
      return charactersLimit - charactersLength;
    },
    changeTextsColor: function () {
      let textsColor =
        ( this.textarea.readonly && this.textarea.disabled ) ? "red" : "black";
      return `color: ${textsColor}`;
    },
    changeTextareaBgColor: function () {
      let textareaBgColor =
        (this.textarea.readonly && this.textarea.disabled ) && "rgb(250, 250, 250)";
      //$color-grey-50: rgb(250, 250, 250)
      return `background-color: ${textareaBgColor}`;
    },
    isDisabledBtn: function () {
      return this.characters.length === 0 ? true : false;
    },
  },
  methods: {
    saveTexts() {
      let textInfo = `${this.characters} 이 저장되었습니다.`;
      alert(textInfo);
      this.characters = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/textArea.scss";
</style>