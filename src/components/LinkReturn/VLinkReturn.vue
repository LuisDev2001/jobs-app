<template>
  <div class="detail__link-return">
    <router-link to="/">
      <font-awesome-icon icon="long-arrow-alt-left" />
      Back to search
    </router-link>
  </div>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faLongArrowAltLeft);
export default {
  name: "VLinkReturn",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped></style>
