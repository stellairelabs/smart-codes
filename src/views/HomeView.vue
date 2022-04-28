<template>
  <v-container fluid>
    <Jumbotron />

    <!-- Benifits of smart contracts -->
    <v-row>
      <v-col>
        <v-img src="https://picsum.photos/id/11/500/300">
          <h2>Benefits of a Smart Contract</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</p></v-img
        >
      </v-col>
      <v-col> </v-col>
    </v-row>
    <OurServices />
    <Feedback />
  </v-container>
</template>

<script>
import OurServices from "../components/home/OurServices.vue";
import Feedback from "../components/home/Feedback.vue";
import Jumbotron from "../components/home/Jumbotron.vue";

export default {
  name: "Home",

  components: { OurServices, Feedback, Jumbotron },
  data: () => ({}),
};
</script>
