<template>
  <v-container>

    <HeaderTile title="Decentralized Application (dApp) Development" :description="dummyText" :image="dummyImage" />

    <InformationTile 
      title="What is a Decentralized Application (dApp)?" 
      :description="dummyText" 
      :image="dummyImage" 
      :leftAligned="false" 
    />

    <BenefitsTile 
      title="Benefits of a Decentralized Application (dApp)" 
      :description="dummyText" 
      :image="dummyImage" 
      :leftAligned="false"
      :data="[dummyTextShort, dummyTextShort, dummyTextShort, dummyTextShort]"
    />

    <InformationTile 
      title="Why choose SMART CODES?" 
      :description="dummyText" 
      :image="dummyImage" 
      :leftAligned="false" 
    />

  </v-container>
</template>


<script>
import dummyImage from "../assets/dummy.png";
import ProcessFlow from "../components/ProcessFlow.vue";
import HeaderTile from "../components/HeaderTile.vue";
import InformationTile from "../components/InformationTile.vue";
import BenefitsTile from "../components/BenefitsTile.vue";

export default {
  name: "DAppDevelopment",
  components: { ProcessFlow, HeaderTile, InformationTile, BenefitsTile },
  data: () => ({
    dummyImage,
    dummyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
          aliquip ex ea commodo consequat.",
    dummyTextShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
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