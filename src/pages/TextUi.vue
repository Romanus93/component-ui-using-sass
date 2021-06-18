<template>
  <main class="multi-line-text-ui">
    <h1>HomeTwo</h1>
    <ul>
      <multi-line-text
        v-for="item in items"
        :key="item.id"
        :textarea="item"
      ></multi-line-text>
    </ul>
  </main>
</template>

<script>
import MultiLineText from "../components/MultiLineText.vue";

export default {
  name: "TextUi",
  components: {
    MultiLineText,
  },
  data: () => {
    return {
      items: [
        {
          id: 1,
          type: "base",
          name: "textarea",
          text: "",
          placeholder: "초기값이 있을 수 있습니다.",
          characters: "입력해주세요.",
          cols: 50,
          rows: 5,
          maxlength: 500,
          placeholderColor: "black",
          readonly: false,
          disabled: false,
          isButton: false,
        },
        {
          id: 2,
          type: "base",
          name: "textarea",
          text: "",
          placeholder: "입력시 버튼이 활성화 됩니다.",
          characters: "입력해주세요.",
          cols: 50,
          rows: 5,
          placeholderColor: "black",
          readonly: false,
          disabled: false,
          isButton: false,
        },
        {
          id: 3,
          type: "base",
          name: "textarea",
          text: "",
          placeholder: "주문 요청사항을 입력해주세요.",
          characters: "입력해주세요.",
          cols: 50,
          rows: 5,
          placeholderColor: "black",
          readonly: false,
          disabled: false,
          isButton: false,
        },
      ],
    };
  },
};
</script>



<style lang="scss" scoped>
.multi-line-text-ui {
  width: 100vw;
}
</style>