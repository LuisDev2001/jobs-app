<template>
  <div :class="className">
    <img :src="urlImg" alt="" />
  </div>
</template>

<script>
export default {
  name: "VAvatarJob",
  props: {
    urlImg: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
