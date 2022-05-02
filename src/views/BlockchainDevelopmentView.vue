<template>
  <v-container>
    <HeaderTile :title="header.title" :description="header.text" :image="header.img" />

    <InformationTile :title="row1.title" :description="row1.text" :image="row1.img" :leftAligned="false" />

    <ProcessFlow :title="row2.title" :processFlow="row2.processFlow" />

    <ImageTileRow :title="row3.title" :description="row3.text" :image="row3.img" :data="row3.fourTileContainer" leftAligned="false" />
  </v-container>
</template>

<script>
import { header, row1, row2, row3 } from "../data/blockchain-development";
import ProcessFlow from "../components/ProcessFlow.vue";
import HeaderTile from "../components/HeaderTile.vue";
import InformationTile from "../components/InformationTile.vue";
import ImageTileRow from "../components/ImageTileRow.vue";

export default {
  name: "BlockchainDevelopment",
  components: { ProcessFlow, HeaderTile, InformationTile, ImageTileRow },
  data: () => ({
    header,
    row1,
    row2,
    row3,
  }),
};
</script>

<style lang="scss" scoped></style>
