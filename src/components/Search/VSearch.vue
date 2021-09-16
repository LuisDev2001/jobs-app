<template>
  <section class="search">
    <form class="search__form">
      <v-input
        className="search__input"
        placeHolderCustom="Title, companies, experti..."
      >
        <font-awesome-icon icon="shopping-bag" />
      </v-input>
      <v-button className="search__button" />
    </form>
  </section>
</template>

<script>
//UI
import VInput from "@/components/Input/VInput";
import VButton from "@/components/Button/VButton";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faShoppingBag);

export default {
  name: "VSearch",
  components: {
    VInput,
    VButton,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_VSearch.scss";
</style>
