<template>
  <v-container fluid>
    <HeaderTile :title="header.title" :description="header.text" :image="header.img" />

    <InformationTile :title="row1.title" :description="row1.text" :image="row1.img" :leftAligned="false" />

    <ProcessFlow :title="row2.title" :processFlow="row2.processFlow" />

    <InformationTile :title="row3.title" :description="row3.text" :image="row3.img" />
  </v-container>
</template>

<script>
import { header, row1, row2, row3 } from "../data/penetrationTesting";
import ProcessFlow from "../components/ProcessFlow.vue";
import HeaderTile from "../components/HeaderTile.vue";
import InformationTile from "../components/InformationTile.vue";

export default {
  name: "PenetrationTesting",
  components: { ProcessFlow, HeaderTile, InformationTile },
  data: () => ({
    header,
    row1,
    row2,
    row3,
  }),
};
</script>

<style lang="scss" scoped></style>
