<template>
  <div class="home">
    <!-- Search component -->
    <v-search />
    <!-- Checkbox component -->
    <v-checkbox />
  </div>
</template>

<script>
import VSearch from "@/components/Search/VSearch";
import VCheckbox from "@/components/Input/VCheckbox";

export default {
  name: "Home",
  components: {
    VSearch,
    VCheckbox,
  },
};
</script>
