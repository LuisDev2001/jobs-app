<template>
  <article class="card__job">
    <v-avatar-job
      className="card__job-image"
      urlImg="https://s3-alpha-sig.figma.com/img/0dda/27ff/b80ddef31127a5eca4d31ad3c0766c66?Expires=1632700800&Signature=RR-BI4nABXe2YVKZLxRxb9lq73-8PoEQhEyz~g-Y5zU4LAWnFR6j9xwCjiTV1hZ9kTiUuFEbsHx9it~H8RDqmVfYHNQuWi6cnG6tbdg4HQfwqnTO1D~0ySz7EeYlZ8ndZVSoYBqJmUftt0qyfAFvf6tD1xgVU7STo~Rxmoi4vliVIfRQSaCmRHmIssYW185mllMJG7K5ZdoTODzJjd2BikxU6~rc0vLnaBOwYtMfADHmbUm5mj8ruN3fP3ZaH-ExKspmms4B87r2ieQ9ZO00ScooMwT78xRNv46nefyl~54BeGmOEz-VyM~1LualHDddO0tkvGESCcXLXrOhMn9Dpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    />
    <div class="card__job-information">
      <div class="card__job-name-enterprise">Kasisto</div>
      <div class="card__job-title">Front-End Software Engineer</div>

      <!-- component full time -->
      <v-label-full-time />

      <section class="card__job-geo-information">
        <!-- component country -->
        <v-label-country />
        <!-- component date and time -->
        <v-label-date />
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
