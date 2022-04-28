<template>
  <v-row>
    <v-img :src="jumbotron.img" aspect-ratio="3">
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

<style></style>
