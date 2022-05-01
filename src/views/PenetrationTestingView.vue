<template>
  <v-container>

    <HeaderTile title="Penetration Testing" :description="dummyText" :image="dummyImage" />

    <InformationTile title="Why should you do a Penetration Test?" :description="dummyText" :image="dummyImage" :leftAligned="false" />

    <ProcessFlow title="Our Penetration Testing Process" :processFlow="process_flow" />

    <InformationTile title="Why choose SMART CODES?" :description="dummyText" :image="dummyImage" />

  </v-container>
</template>


<script>
import dummyImage from "../assets/dummy.png";
import ProcessFlow from "../components/ProcessFlow.vue";
import HeaderTile from "../components/HeaderTile.vue";
import InformationTile from "../components/InformationTile.vue";

export default {
  name: "PenetrationTesting",
  components: { ProcessFlow, HeaderTile, InformationTile },
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