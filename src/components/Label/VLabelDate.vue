<template>
  <span class="label__date-time">
    <font-awesome-icon icon="clock" />
    5 days ago
  </span>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faClock);
export default {
  name: "VLabelDate",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.label__date-time {
  font-size: 12px;
  color: #b9bdcf;
  font-family: "Roboto-Regular";
  svg {
    margin: 0 7.5px 0 0;
    font-size: 1rem;
  }
}
</style>
