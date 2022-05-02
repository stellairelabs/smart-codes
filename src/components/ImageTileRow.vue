<template>
  <v-row class="image-tile-row">
    <v-col v-if="!leftAligned"> <FourTileContainer :data="data" /></v-col>
    <v-col cols="12" md="6">
      <v-img :src="image" class="image-container">
        <div class="image-container__content">
          <h1>{{ title }}</h1>
          <p class="image-container__text">{{ description }}</p>
        </div>
      </v-img>
    </v-col>
    <v-col v-if="leftAligned"><FourTileContainer :data="data" /> </v-col>
  </v-row>
</template>

<script>
import FourTileContainer from "./FourTileContainer.vue";
export default {
  name: "BenefitsTile",
  props: ["title", "description", "image", "leftAligned", "data"],
  data: () => ({}),
  components: { FourTileContainer },
};
</script>

<style scoped>
.image-container {
  align-items: center;
  padding: 30px;
}
.image-container__text {
  text-align: justify;
}

@media (min-width: 960px) {
  .image-tile-row {
    padding: 50px;
  }
}
</style>
