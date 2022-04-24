<template>
  <v-container>
    <!-- Jumbotron -->

    <v-row> </v-row>
    <!-- Benifits of smart contracts -->
    <v-row> </v-row>
    <OurServices />
    <Feedback />
  </v-container>
</template>

<script>
import OurServices from "../components/home/OurServices.vue";
import Feedback from "../components/home/Feedback.vue";
export default {
  name: "Home",

  components: { OurServices, Feedback },
  data: () => ({}),
};
</script>
