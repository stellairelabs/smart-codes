<template>
  <v-container>

    <HeaderTile title="Penetration Testing" :description="dummyText" :image="dummyImage" />

    <v-row align="center" justify="space-between" class="mb-15">
      <v-col cols="6">
        <v-img :src="dummyImage" alt="" max-width="550px" />
      </v-col>
      <v-col cols="5">
        <h1>Why should you do a Penetration Test?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </v-col>
    </v-row>

    <ProcessFlow title="Our Penetration Testing Process" :processFlow="process_flow" />

    <v-row align="center" justify="space-between">
      <v-col cols="5">
        <h1 class="mb-5">Why choose SMART CODES?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </v-col>
      <v-col cols="6">
        <v-img :src="dummyImage" alt="" max-width="550px" />
      </v-col>
    </v-row>

  </v-container>
</template>


<script>
import dummyImage from "../assets/dummy.png";
import ProcessFlow from "../components/ProcessFlow.vue";
import HeaderTile from "../components/HeaderTile.vue";

export default {
  name: "PenetrationTesting",
  components: { ProcessFlow, HeaderTile },
  data: () => ({
    dummyImage,
    dummyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
          aliquip ex ea commodo consequat.",
    process_flow: [
      { name: "Share Source Code", image: dummyImage },
      { name: "Receive Quote", image: dummyImage },
      { name: "Begin Vulnerability Scanning", image: dummyImage },
      { name: "Suggest Remediations", image: dummyImage },
      { name: "Deliver Report", image: dummyImage },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>