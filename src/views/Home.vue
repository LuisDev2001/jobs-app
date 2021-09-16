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
    <!-- System of grid and cards of job -->
    <v-grid>
      <v-card-job />
      <v-card-job />
      <v-card-job />
      <v-card-job />
    </v-grid>
  </div>
</template>

<script>
import { ref } from "vue";
//UI
import VSearch from "@/components/Search/VSearch";
import VCheckbox from "@/components/Input/VCheckbox";
import VFormLocation from "@/components/Location/VFormLocation";
import VRadioButton from "@/components/Input/VRadioButton.vue";
import VGrid from "@/components/Grid/VGrid.vue";
import VCardJob from "@/components/CardJob/VCardJob.vue";

export default {
  name: "Home",
  components: {
    VSearch,
    VCheckbox,
    VFormLocation,
    VRadioButton,
    VGrid,
    VCardJob,
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
