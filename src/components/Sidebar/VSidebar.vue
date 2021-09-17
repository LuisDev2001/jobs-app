<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VSidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  grid-area: sidebar;
  margin: 0 32px 0 0;
}
</style>
