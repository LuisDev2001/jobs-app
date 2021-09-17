<template>
  <div class="radiobutton">
    <input type="radio" name="radio-predefined" :id="radioName" />
    <span class="radiobutton__custom"></span>
    <label :for="radioName">
      {{ radioName }}
    </label>
  </div>
</template>

<script>
export default {
  name: "VRadioButton",
  props: {
    radioName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VRadioButton.scss";
</style>
