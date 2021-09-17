<template>
  <div class="location">
    <h3>Location</h3>
    <form class="location__form">
      <v-input
        className="location__input"
        placeHolderCustom="City, state, zip code or country"
      >
        <font-awesome-icon icon="globe-americas" />
      </v-input>
    </form>
  </div>
</template>

<script>
import VInput from "@/components/Input/VInput";
import VButton from "@/components/Button/VButton";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGlobeAmericas);

export default {
  name: "VFormLocation",
  components: {
    VInput,
    VButton,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VFormLocation.scss";
</style>
