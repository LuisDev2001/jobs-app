<template>
  <div
    class="label-full-time"
    v-if="fullTimeVal === 'Full Time' || fullTimeVal === 'Full-Time'"
  >
    {{ fullTimeVal }}
  </div>
</template>

<script>
export default {
  name: "VLabelFullTime",
  props: {
    fullTimeVal: String,
  },
};
</script>

<style lang="scss" scoped>
.label-full-time {
  font-family: "Roboto-Bold";
  font-size: 12px;
  color: #334680;
  border: 1px solid #334680;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 63px;
  margin: 0 0 1.625rem 0;
}
</style>
