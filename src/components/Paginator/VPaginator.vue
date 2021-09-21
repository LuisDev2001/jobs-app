<template>
  <section class="paginator">
    <button class="paginator__prev">
      <font-awesome-icon icon="chevron-left" />
    </button>

    <div class="paginator__number active">1</div>
    <div class="paginator__number">2</div>
    <div class="paginator__number">3</div>

    <div class="paginator__more-pages">
      <font-awesome-icon icon="ellipsis-h" />
    </div>

    <div class="paginator__number">10</div>

    <button class="paginator__nex">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </section>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faChevronLeft, faChevronRight, faEllipsisH);

export default {
  name: "VPaginator",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VPaginator.scss";
</style>
