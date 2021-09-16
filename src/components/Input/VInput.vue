<template>
  <div :class="className">
    <!-- This slot is for put a icon -->
    <slot></slot>
    <input type="text" name="search-job" :placeholder="placeHolderCustom" />
  </div>
</template>

<script>
export default {
  name: "VInput ",
  props: {
    className: {
      type: String,
      default: "",
    },
    placeHolderCustom: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VInput.scss";
</style>
