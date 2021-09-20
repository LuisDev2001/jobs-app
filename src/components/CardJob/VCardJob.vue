<template>
  <article class="card__job">
    <v-avatar-job
      className="card__job-image"
      urlImg="../assets/img/logoJob.jpg"
    />
    <div class="card__job-information">
      <div class="card__job-name-enterprise">{{ companyName }}</div>
      <div class="card__job-title">{{ jobTitle }}</div>

      <!-- component full time -->
      <v-label-full-time
        v-for="(fullTimeLabel, index) in fullTimeObj"
        :key="index"
        :fullTimeVal="fullTimeLabel.Name.replace('-', ' ')"
      />

      <section class="card__job-geo-information">
        <!-- component country -->
        <v-label-country :countryName="countryName" />
        <!-- component date and time -->
        <v-label-date :dateValue="dateValue" />
      </section>
    </div>
  </article>
</template>

<script>
//UI
import VAvatarJob from "@/components/AvatarJob/VAvatarJob";
import VLabelFullTime from "@/components/Label/VLabelFullTime";
import VLabelCountry from "@/components/Label/VLabelCountry.vue";
import VLabelDate from "@/components/Label/VLabelDate.vue";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAmericas, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGlobeAmericas, faClock);
export default {
  name: "VCardJob",
  props: {
    companyName: String,
    jobTitle: String,
    countryName: String,
    dateValue: Number,
    fullTimeObj: Object,
  },
  components: {
    FontAwesomeIcon,
    VAvatarJob,
    VLabelFullTime,
    VLabelCountry,
    VLabelDate,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VCardJob.scss";
</style>
