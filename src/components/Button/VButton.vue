<template>
  <div :class="className">
    <button type="submit">Search</button>
  </div>
</template>

<script>
export default {
  name: "VButton",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
