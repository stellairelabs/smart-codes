<template>
  <v-footer padless class="footer">
    <v-container>
      <v-row>
        <v-col
          ><v-img max-height="150" max-width="250" contain :src="logo"></v-img>
          <p></p></v-col
        ><v-col></v-col><v-col></v-col><v-col></v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "Footer",
  data: () => ({
    logo,
  }),
};
</script>

<style></style>
