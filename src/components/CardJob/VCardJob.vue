<template>
  <article class="card__job">
    <div class="card__job-image">
      <img
        src="https://s3-alpha-sig.figma.com/img/0dda/27ff/b80ddef31127a5eca4d31ad3c0766c66?Expires=1632700800&Signature=RR-BI4nABXe2YVKZLxRxb9lq73-8PoEQhEyz~g-Y5zU4LAWnFR6j9xwCjiTV1hZ9kTiUuFEbsHx9it~H8RDqmVfYHNQuWi6cnG6tbdg4HQfwqnTO1D~0ySz7EeYlZ8ndZVSoYBqJmUftt0qyfAFvf6tD1xgVU7STo~Rxmoi4vliVIfRQSaCmRHmIssYW185mllMJG7K5ZdoTODzJjd2BikxU6~rc0vLnaBOwYtMfADHmbUm5mj8ruN3fP3ZaH-ExKspmms4B87r2ieQ9ZO00ScooMwT78xRNv46nefyl~54BeGmOEz-VyM~1LualHDddO0tkvGESCcXLXrOhMn9Dpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
    </div>
    <div class="card__job-information">
      <div class="card__job-name-enterprise">Kasisto</div>
      <div class="card__job-title">Front-End Software Engineer</div>
      <div class="card__job-full-time">Full time</div>
      <section class="card__job-geo-information">
        <div class="card__job-country">
          <font-awesome-icon icon="globe-americas" />
          New York
        </div>
        <div class="card__job-date">
          <font-awesome-icon icon="clock" />
          5 days ago
        </div>
      </section>
    </div>
  </article>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAmericas, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGlobeAmericas, faClock);
export default {
  name: "VCardJob",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VCardJob.scss";
</style>
