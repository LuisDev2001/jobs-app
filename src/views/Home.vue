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
        v-for="(job, index) in jobs.get()[numberIncrementDecrement - 1]"
        :key="index"
        :companyName="job.companyName"
        :jobTitle="job.jobName"
        :fullTimeObj="job.fullTime"
        :countryName="job.countryName"
        :dateValue="job.publishDate"
      />
      <h3>Pagina {{ numberIncrementDecrement }}</h3>
      <v-paginator
        :listJobs="jobs.get()"
        :FnPreviousPage="handlePrevPage"
        :FnNextPage="handleNextPage"
        :FnCurrentPage="handleCurrentPage"
        :pageNumber="numberList"
        :qtyPage="numberIncrementDecrement"
      />
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

    const optionsPredefined = ref([
      "London",
      "Amsterdam",
      "New York",
      "Berlin",
    ]);

    const numberList = ref([0]);
    const numberIncrementDecrement = ref(1);

    const handleNextPage = () => {
      numberList.value = [
        ...numberList.value,
        numberIncrementDecrement.value++,
      ];
      console.log("Pagina->", numberIncrementDecrement.value);
      store.dispatch("GET_JOBS", numberIncrementDecrement.value);
    };

    const handlePrevPage = () => {
      numberIncrementDecrement.value = numberIncrementDecrement.value - 1;
    };

    const handleCurrentPage = (index) => {
      console.log("Click");
      console.log(index);
    };

    onMounted(() => {
      store.dispatch("GET_JOBS");
    });

    return {
      optionsPredefined,
      jobs,
      numberList,
      numberIncrementDecrement,
      handlePrevPage,
      handleNextPage,
      handleCurrentPage,
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
