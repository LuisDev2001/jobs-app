<template>
  <div class="location">
    <form class="location__form">
      <v-input
        className="location__input"
        placeHolderCustom="City, state, zip code or country"
      >
        ICON
      </v-input>
    </form>
  </div>
</template>

<script>
import VInput from "@/components/Input/VInput";
import VButton from "@/components/Button/VButton";

export default {
  name: "VFormLocation",
  components: {
    VInput,
    VButton,
  },
};
</script>

<style lang="scss" scoped></style>
