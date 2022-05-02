<template>
  <v-row class="tile-container">
    <v-col class="tile-wrapper" cols="12" md="6">
      <v-card class="tile tile-1">
        <v-card-title class="tile__title">1</v-card-title>
        <v-card-text class="tile__text">
          {{ data[0].text }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="tile-wrapper" cols="12" md="6">
      <v-card class="tile tile-2">
        <v-card-title class="tile__title">2</v-card-title>
        <v-card-text class="tile__text">
          {{ data[1].text }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="tile-wrapper" cols="12" md="6">
      <v-card class="tile tile-3">
        <v-card-title class="tile__title">3</v-card-title>
        <v-card-text class="tile__text">
          {{ data[2].text }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="tile-wrapper" cols="12" md="6">
      <v-card class="tile tile-4">
        <v-card-title class="tile__title">4</v-card-title>
        <v-card-text class="tile__text">
          {{ data[3].text }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FourTileContainer",
  props: ["data"],
};
</script>

<style scoped>
.tile-container {
  /* align-content: center; */
  height: 100%;
}
.tile-wrapper {
  padding: auto;
}

.tile {
  border: 2px solid;
  position: relative;
}

.tile__title {
  font-size: 1.3em;
  background-color: white;
  text-align: left;
  position: absolute;
  top: -20px;
  left: 10px;
  word-break: unset;
  padding: 5px;
}

.tile__text {
  padding-top: 20px;
  text-align: justify;
  color: black !important;
}

@media (min-width: 960px) {
  .tile-wrapper {
    position: relative;
  }
  .tile {
    border: 2px solid;
    position: absolute;
    /* height: 50%; */
  }

  .tile-1 {
    bottom: 30%;
  }

  .tile-2 {
    bottom: 5%;
  }
  .tile-3 {
    top: -20%;
  }
  .tile-4 {
    top: 5%;
  }
}
</style>
