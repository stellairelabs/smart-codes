<template>
  <v-container fluid>
    <HeaderTile :title="header.title" :description="header.text" :image="header.img" />

    <ImageTileRow :title="row1.title" :description="row1.text" :image="row1.img" :data="row1.fourTileContainer" leftAligned="false" />

    <ProcessFlow :title="row2.title" :processFlow="row2.processFlow" />

    <InformationTile :title="row3.title" :description="row3.text" :image="row3.img" leftAligned="false" />
  </v-container>
</template>

<script>
import { header, row1, row2, row3 } from "../data/smartContractAudit";
import ProcessFlow from "../components/ProcessFlow.vue";
import HeaderTile from "../components/HeaderTile.vue";
import InformationTile from "../components/InformationTile.vue";
import ImageTileRow from "../components/ImageTileRow.vue";

export default {
  name: "SmartContractAudit",
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
