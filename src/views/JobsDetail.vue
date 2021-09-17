<template>
  <div class="detail">
    <!-- components link return -->
    <v-link-return />

    <!-- how to aplay -->
    <div class="detail__how-apply">
      <h3>How to Apply</h3>
      <p>
        Please email a copy of your resume and online portfolio to
        wes@kasisto.com & CC eric@kasisto.com
      </p>
    </div>

    <!-- component info job -->
    <v-detail-job />
  </div>
</template>

<script>
//UI
import VLinkReturn from "@/components/LinkReturn/VLinkReturn";
import VDetailJob from "@/components/JobsDetails/VJobsDetails";

export default {
  name: "JobsDetail",
  components: {
    VLinkReturn,
    VDetailJob,
  },
};
</script>

<style></style>
