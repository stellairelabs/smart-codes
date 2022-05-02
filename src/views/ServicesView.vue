<template>
  <v-container fluid>
    <v-row>
      <v-img :src="jumbotron.img" class="jumbotron">
        <h1 class="jumbotron__title">{{ jumbotron.title }}</h1>
        <p class="jumbotron__text">{{ jumbotron.text }}</p>
        <v-btn class="jumbotron__btn" to="/request-a-quote" outlined x-large>Request A Quote</v-btn></v-img
      >
    </v-row>

    <v-row v-for="(serviceGroup, i) in services" :key="i" class="services">
      <v-col cols="12" md="2" class="services__category">
        <h2>{{ serviceGroup.category }}</h2>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12" sm="6" md="3" v-for="(service, i) in serviceGroup.services" :key="i">
            <v-card class="services__service-card">
              <v-card-title class="services__service-card__title">{{ service.title }}</v-card-title>
              <v-card-text class="services__service-card__text">
                {{ service.text }}
              </v-card-text>
              <v-card-text>
                <v-btn :to="service.path" outlined>Learn more</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { jumbotron, services } from "../data/services.js";
export default {
  name: "Services",
  data: () => ({
    jumbotron,
    services,
  }),
};
</script>

<style scoped>
.jumbotron {
  align-items: center;
  text-align: center;
  max-height: 600px;
}

.services {
  padding: 30px 50px;
  align-items: center;
}

.services__category {
  text-align: center;
  text-decoration: underline;
}

.services__service-card {
  border: 1px solid black;
  height: 100%;
  position: relative;
}

.services__service-card__title {
  font-size: 1.3em;
  background-color: white;
  text-align: left;
  position: absolute;
  top: -20px;
  left: 10px;
  word-break: unset;
  padding: 5px;
}

.services__service-card__text {
  padding-top: 50px;
  text-align: justify;
  color: black !important;
}
</style>
