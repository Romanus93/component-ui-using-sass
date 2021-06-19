<template>
  <main class="textarea-ui">
    <section>
      <h2>textarea</h2>
      <ul>
        <text-area
          v-for="item in items"
          :key="item.id"
          :textarea="item"
        ></text-area>
      </ul>
    </section>
  </main>
</template>

<script>
import TextArea from "../components/TextArea.vue";

export default {
  name: "TextUi",
  components: {
    TextArea,
  },
  data: () => {
    return {
      items: [
        {
          id: 1,
          type: "base",
          name: "textarea",
          text: "",
          placeholder: "textarea-placeholder",
          characters: "입력해주세요.",
          cols: 50,
          rows: 5,
          maxlength: 500,
          readonly: false,
          disabled: false,
          isButton: true,
        },
        {
          id: 2,
          type: "base",
          name: "textarea",
          text: "초기값이 존재",
          placeholder: "textarea-placeholder",
          characters: "입력해주세요.",
          cols: 50,
          rows: 5,
          readonly: false,
          disabled: false,
          isButton: true,
        },
        {
          id: 3,
          type: "base",
          name: "textarea",
          text: "읽기 전용",
          placeholder: "textarea-placeholder",
          characters: "입력해주세요.",
          cols: 50,
          rows: 5,
          readonly: true,
          disabled: true,
          isButton: false,
        },
      ],
    };
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/pages/textUi.scss";
</style>