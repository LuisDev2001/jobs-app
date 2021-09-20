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
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 4px;
  object-fit: cover;
}
</style>
