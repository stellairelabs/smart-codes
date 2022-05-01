<template>
    <v-row align="center" class="mb-15" justify="space-between">
      <v-col cols="5">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
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


