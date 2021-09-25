<template>
  <section class="paginator">
    <button
      class="paginator__prev"
      @click="FnPreviousPage"
      v-show="qtyPage != 1"
    >
      <font-awesome-icon icon="chevron-left" />
    </button>

    <div
      v-for="(page, index) in pageNumber"
      :key="index"
      @click="FnCurrentPage(index + 1)"
      :class="{
        paginator__number: true,
        active: index == qtyPage - 1,
      }"
    >
      {{ index + 1 }}
    </div>

    <!-- <div class="paginator__more-pages">
      <font-awesome-icon icon="ellipsis-h" />
    </div> -->

    <!-- <div class="paginator__number">10</div> -->

    <button
      class="paginator__nex"
      @click="FnNextPage"
      v-show="(qtyPage * 1) / pageNumber.length != 1"
    >
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
  props: {
    pageNumber: Array,
    FnNextPage: Function,
    FnPreviousPage: Function,
    FnCurrentPage: Function,
    qtyPage: Number,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VPaginator.scss";
</style>
