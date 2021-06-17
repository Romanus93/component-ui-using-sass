<template>
  <div class="text-btn-box flex">
    <div class="text-box" :class="{ 'text-box-with-btn': btnShow }">
      <textarea
        :placeholder="textPlaceholder"
        maxlength="500"
        v-model="characters"
        :readonly="textReadonly"
        :disabled="textDisabled"
        :rows="textRows"
        :cols="textCols"
        :style="
          placeholderColor ? { '--placeholder-color': placeholderColor } : {}
        "
      ></textarea>
      <span class="counter">
        {{ charactersLeft }}
      </span>
    </div>
    <div class="btn-box" v-if="btnShow">
      <button class="button--save" type="button" :disabled="disableButton">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputUi",
  props: {
    textareaType: {
      type: String,
    },
  },
  created() {
    console.log("created", this.disableButton);
    if (this.textareaType == "one") {
    } else if (this.textareaType == "two") {
      this.btnShow = true;
    } else {
      this.characters = "";
      this.textDisabled = true;
      this.textReadonly = true;
      this.textPlaceholder = "주문 요청사항을 입력해주세요.";
      this.placeholderColor = "red";
    }
  },
  data() {
    return {
      text: "",
      characters: "입력해주세요.",
      textDisabled: false,
      textReadonly: false,
      textPlaceholder: "placeholder",
      textRows: 10,
      textCols: 20,
      placeholderColor: "black",
      btnShow: false,
    };
  },
  computed: {
    charactersLeft() {
      let char = this.characters.length;
      let limit = 500;
      return limit - char;
    },
    disableButton() {
      if (this.characters == "입력해주세요.") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.text-btn-box {
  width: 100%;
  border: 1px solid;
  height: 25vh;
}

.text-box {
  width: 95%;
  margin-left: 5%;
}

.text-box textarea {
  width: 100%;
  resize: none;
  height: 20vh;
  padding: 0 0.5rem;
}

.text-box .counter {
  position: relative;
  right: -11.6rem;
  bottom: 1.5rem;
}

.btn-box {
  width: 10%;
  height: 20vh;
}

.button--save {
  width: 100%;
  height: 100%;
}

textarea::placeholder {
  color: var(--placeholder-color);
}

.text-box-with-btn {
  width: 85%;
}
</style>