<template>
  <v-row class="our-services">
    <v-col cols="12">
      <h2>Our Services</h2>
    </v-col>
    <v-col v-for="(category, i) in services" :key="i">
      <h3>{{ category.category }}</h3>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(service, j) in category.services" :key="j">
            <!-- <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title v-text="service.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import services from "../../data/services.json";
export default {
  name: "OurServices",
  data: () => ({
    services,
  }),
};
</script>

<style></style>
