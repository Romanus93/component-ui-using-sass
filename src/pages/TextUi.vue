<template>
  <div>
    <h1>HomeTwo</h1>
    <input-ui textareaType="one"></input-ui>
    <input-ui textareaType="two"></input-ui>
    <input-ui textareaType="three"></input-ui>
  </div>
</template>

<script>
import InputUi from "/src/components/InputUi.vue";

export default {
  name: "TextUi",
  components: {
    InputUi,
  },
  data() {
    return {};
  },
};
</script>



<style scoped>
</style>