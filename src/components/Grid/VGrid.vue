<template>
  <section class="grid">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "VGrid",
};
</script>

<style lang="scss" scoped>
.grid {
  grid-area: jobs;
}
</style>
