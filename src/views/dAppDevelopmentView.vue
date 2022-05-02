<template>
  <v-container>
    <HeaderTile :title="header.title" :description="header.text" :image="header.img" />

    <InformationTile :title="row1.title" :description="row1.text" :image="row1.img" :leftAligned="false" />

    <ImageTileRow :title="row2.title" :description="row2.text" :image="row2.img" :data="row2.fourTileContainer" />

    <InformationTile :title="row3.title" :description="row3.text" :image="row3.img" :leftAligned="false" />
  </v-container>
</template>

<script>
import { header, row1, row2, row3 } from "../data/dAppDevelopment";
import HeaderTile from "../components/HeaderTile.vue";
import InformationTile from "../components/InformationTile.vue";
import ImageTileRow from "../components/ImageTileRow.vue";

export default {
  name: "DAppDevelopment",
  components: { HeaderTile, InformationTile, ImageTileRow },
  data: () => ({
    header,
    row1,
    row2,
    row3,
  }),
};
</script>

<style lang="scss" scoped></style>
