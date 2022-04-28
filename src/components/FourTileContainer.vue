<template>
  <v-row class="tile-container">
    <v-col align-self="stretch" cols="6" v-for="(item, i) in data" :key="i"
      ><v-card class="tile">
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </v-card></v-col
    >
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
  align-items: center;
  height: 100%;
}
.tile {
  height: 100%;
  border: 2px solid;
}
</style>
