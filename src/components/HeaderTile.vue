<template>
  <v-row class="header">
    <v-col md="6" class="header__text-container">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__text">{{ description }}</p>
      <v-btn class="header__btn" to="/request-a-quote" x-large outlined>Request A Quote</v-btn>
    </v-col>
    <v-col class="header__image-container">
      <v-img :src="image" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeaderTile",
  props: ["title", "description", "image"],
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  text-align: justify;
}
.header__text-container {
  padding: 50px;
}
.header__title {
  font-size: 45px;
}

.header__image-container {
  padding: 0;
}
</style>
