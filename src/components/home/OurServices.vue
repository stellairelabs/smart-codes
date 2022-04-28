<template>
  <v-row class="our-services">
    <v-col cols="12">
      <h2 class="our-services__title">Our Services</h2>
    </v-col>
    <v-col v-for="(category, i) in services" :key="i">
      <h3 class="our-services__subtitle">{{ category.category }}</h3>
      <v-list>
        <v-list-item v-for="(service, j) in category.services" :key="j">
          <v-list-item-icon>
            <v-icon>mdi-check-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="service.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { services } from "../../data/services.js";
export default {
  name: "OurServices",
  data: () => ({
    services,
  }),
};
</script>

<style>
.our-services__title {
  text-align: center;
  font-weight: bold;
}

.our-services__subtitle {
  text-align: center;
  text-decoration: underline;
}
</style>
