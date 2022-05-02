<template>
  <v-row class="information-row">
    <v-col v-if="leftAligned" class="information-container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </v-col>
    <v-col><v-img :src="image" /></v-col>
    <v-col v-if="!leftAligned" class="information-container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InformationTile",
  props: {
    title: String,
    description: String,
    image: String,
    leftAligned: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({}),
};
</script>

<style scoped>
.information-container {
  align-self: center;
}
@media (min-width: 960px) {
  .information-row {
    padding: 50px;
  }
}
</style>
