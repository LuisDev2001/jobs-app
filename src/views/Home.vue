<template>
  <div class="home">
    <!-- Search component -->
    <v-search />
    <!-- Checkbox component -->
    <v-checkbox />
    <!-- Location component -->
    <v-form-location />
    <!-- Radiobutton components -->
    <v-radio-button
      v-for="(options, index) in optionsPredefined"
      :key="index"
      :radioName="options"
    />
  </div>
</template>

<script>
import VSearch from "@/components/Search/VSearch";
import VCheckbox from "@/components/Input/VCheckbox";
import VFormLocation from "@/components/Location/VFormLocation";
import VRadioButton from "@/components/Input/VRadioButton.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    VSearch,
    VCheckbox,
    VFormLocation,
    VRadioButton,
  },
  setup() {
    const optionsPredefined = ref([
      "London",
      "Amsterdam",
      "New York",
      "Berlin",
    ]);

    return {
      optionsPredefined,
    };
  },
};
</script>
