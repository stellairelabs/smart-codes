<template>
  <v-row>
    <v-img :src="jumbotron.img" aspect-ratio="3" class="image-content">
      <h1>{{ jumbotron.title1 }}<br />{{ jumbotron.title2 }}</h1>
      <p>{{ jumbotron.text }}</p></v-img
    >
  </v-row>
</template>

<script>
import { jumbotron } from "../../data/home";
export default {
  name: "Jumbotron",
  data: () => ({
    jumbotron,
  }),
};
</script>

<style scoped>
.image-content {
  align-items: center;
  padding: 50px;
}
</style>
