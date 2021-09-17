<template>
  <span class="label__country">
    <font-awesome-icon icon="globe-americas" />
    New York
  </span>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGlobeAmericas);

export default {
  name: "VLabelCountry",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss">
.label__country {
  font-size: 12px;
  color: #b9bdcf;
  font-family: "Roboto-Regular";
  svg {
    margin: 0 7.5px 0 0;
  }
}
</style>
