<template>
  <div class="detail">
    <!-- components link return -->
    <v-link-return />

    <!-- how to aplay -->
    <div class="detail__how-apply">
      <h3>How to Apply</h3>
      <p>
        Please email a copy of your resume and online portfolio to
        <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span>
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

<style lang="scss" scoped>
.detail__how-apply {
  margin: 0 0 2.25rem 0;
  h3 {
    font-family: "Poppins-SemiBold";
    font-size: 0.875rem;
    text-transform: uppercase;
    color: #b9bdcf;
    margin: 0 0 1rem 0;
  }
  p {
    line-height: 21px;
    font-size: 0.875rem;
    font-family: "Poppins-Regular";
    color: #334680;
    span {
      color: #1e86ff;
    }
  }
}
</style>
