<template>
  <section class="search">
    <form class="search__form">
      <v-input />

      <v-button />
    </form>
  </section>
</template>

<script>
import VInput from "@/components/Input/VInput";
import VButton from "@/components/Button/VButton";
export default {
  name: "VSearch",
  components: {
    VInput,
    VButton,
  },
};
</script>

<style lang="scss" scoped></style>
