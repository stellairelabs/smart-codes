<template>
  <v-row class="process-row">
    <v-col cols="12" class="process-title">
      <h1>{{ title }}</h1>
    </v-col>
    <!-- <v-row class="mb-15"> -->
    <v-col xs="12" sm="6" md="4" lg="" v-for="(process, i) in processFlow" :key="i">
      <v-row justify="center">
        <v-col cols="6" align="center" align-self="center">
          <v-avatar size="100"><v-img :src="process.img" /></v-avatar>
          <h3>Step {{ i + 1 }}</h3>
          <span>{{ process.name }}</span>
        </v-col>
        <v-col cols="6" align-self="start" class="pt-6" v-if="i != 4">
          <v-img :src="arrow" width="130px" />
        </v-col>
        <v-col cols="6" align="center" v-if="i == 4"> </v-col>
      </v-row>
    </v-col>
  </v-row>
  <!-- </v-row> -->
</template>

<script>
import arrow from "../assets/arrow.png";

export default {
  name: "ProcessFlow",
  props: ["title", "processFlow"],
  data: () => ({
    arrow,
  }),
};
</script>

<style lang="scss" scoped>
.process-title {
  text-align: center;
}
@media (min-width: 960px) {
  .process-row {
    padding: 50px;
  }
}
</style>
