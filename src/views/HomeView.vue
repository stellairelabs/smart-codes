<template>
  <v-container fluid>
    <Jumbotron />

    <!-- Benifits of smart contracts -->
    <ImageTileRow :title="row1.title" :description="row1.text" :image="row1.img" :data="row1.fourTileContainer" leftAligned="false" />

    <OurServices />
    <Feedback />
  </v-container>
</template>

<script>
import OurServices from "../components/home/OurServices.vue";
import Feedback from "../components/home/Feedback.vue";
import Jumbotron from "../components/home/Jumbotron.vue";
import ImageTileRow from "../components/ImageTileRow.vue";

import { row1 } from "../data/home";

export default {
  name: "Home",

  components: { OurServices, Feedback, Jumbotron, ImageTileRow },
  data: () => ({ row1 }),
};
</script>
