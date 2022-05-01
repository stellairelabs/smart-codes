<template>
    <v-row align="center" class="mb-15" justify="space-between">
      <v-col cols="5">
        <h1>{{ title }}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <v-btn to="/request-a-quote" text outlined>Request A Quote</v-btn>
      </v-col>
      <v-col cols="6">
        <v-img :src="image" alt="" max-width="550px" />
      </v-col>
    </v-row>
</template>


<script>

export default {
  name: "HeaderTile",
  props: ['title', 'description', 'image'],
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 45px;
}
</style>


