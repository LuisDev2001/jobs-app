<template>
  <div class="detail wrapper">
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
.detail {
  &__how-apply {
    margin: 0 0 2.25rem 0;
    grid-area: how-apply;
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
  @media screen and (min-width: 992px) {
    margin-top: 36px;
    display: grid;
    grid-template-columns: 235px 1fr;
    grid-template-rows: auto auto 1fr;
    grid-column-gap: 77px;
    grid-template-areas:
      "link-return detail-job"
      "how-apply detail-job"
      "how-apply detail-job";
  }
}
</style>
