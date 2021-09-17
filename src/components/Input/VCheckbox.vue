<template>
  <div class="checkbox">
    <label for="checkbox-full-time">
      <input
        type="checkbox"
        name="checkbox-full-time"
        id="checkbox-full-time"
      />
      <span class="checkbox__custom">
        <font-awesome-icon icon="check" />
      </span>
      <span class="checkbox__text">
        Full time
      </span>
    </label>
  </div>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck);

export default {
  name: "VCheckbox",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VCheckbox.scss";
</style>
