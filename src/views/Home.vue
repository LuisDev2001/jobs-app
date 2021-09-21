<template>
  <div class="home">
    <!-- Search component -->
    <v-search />

    <!-- Sidebar component -->
    <v-sidebar>
      <!-- Checkbox component -->
      <v-checkbox />
      <!-- Location component -->
      <v-form-location />
      <!-- Radiobutton components -->
      <section class="options__predefined">
        <v-radio-button
          v-for="(options, index) in optionsPredefined"
          :key="index"
          :radioName="options"
        />
      </section>
    </v-sidebar>
    <!-- System of grid and cards of job -->
    <v-grid>
      <v-card-job
        v-for="(job, index) in jobs.get()"
        :key="index"
        :companyName="job.companyName"
        :jobTitle="job.jobName"
        :fullTimeObj="job.fullTime"
        :countryName="job.countryName"
        :dateValue="job.publishDate"
      />
      <v-paginator />
    </v-grid>

    <!-- footer component -->
    <v-footer />
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
//UI
import VSearch from "@/components/Search/VSearch";
import VCheckbox from "@/components/Input/VCheckbox";
import VFormLocation from "@/components/Location/VFormLocation";
import VRadioButton from "@/components/Input/VRadioButton";
import VGrid from "@/components/Grid/VGrid";
import VCardJob from "@/components/CardJob/VCardJob";
import VFooter from "@/components/Footer/VFooter";
import VSidebar from "@/components/Sidebar/VSidebar";
import VPaginator from "@/components/Paginator/VPaginator";

export default {
  name: "Home",
  components: {
    VSearch,
    VCheckbox,
    VFormLocation,
    VRadioButton,
    VGrid,
    VCardJob,
    VFooter,
    VSidebar,
    VPaginator,
  },
  setup() {
    const store = useStore();
    //get job
    const jobs = computed(() => ({
      get() {
        return store.state.jobs;
      },
      set(value) {
        store.commit("LOAD_JOBS", value);
      },
    }));

    onMounted(() => {
      store.dispatch("GET_JOBS");
    });

    const optionsPredefined = ref([
      "London",
      "Amsterdam",
      "New York",
      "Berlin",
    ]);

    return {
      optionsPredefined,
      jobs,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 2rem auto 0;
  .options__predefined {
    margin: 0 0 1.625rem 0;
    padding: 0 0.875rem;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 380px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "search search"
      "sidebar jobs"
      "footer footer";
  }
}
</style>
