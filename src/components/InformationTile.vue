<template>
  <v-container>
      <v-row v-if="leftAligned" align="center" class="mb-15" justify="space-between">
        <v-col cols="5">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </v-col>
        <v-col cols="6">
          <v-img :src="image" alt="" max-width="550px" />
        </v-col>
      </v-row>

      <v-row v-if="!leftAligned" align="center" class="mb-15" justify="space-between">
        <v-col cols="6">
          <v-img :src="image" alt="" max-width="550px" />
        </v-col>
        <v-col cols="5">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </v-col>
      </v-row>
  </v-container>
</template>


<script>

export default {
  name: "InformationTile",
  props: {
    title: String,
    description: String,
    image: String,
    leftAligned: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
</style>


