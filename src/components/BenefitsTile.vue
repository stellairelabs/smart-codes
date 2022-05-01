<template>
  <v-container>

    <v-row v-if="!leftAligned" align="center" class="my-10 flex-wrap-reverse" justify="space-around">
      <div class="left-half">
        <v-row>
          <div class="box">1 {{ dummyText }}</div>
          <div class="box second">2 {{ dummyText }}</div>
        </v-row>
        <v-row>
          <div class="box third">3 {{ dummyText }}</div>
          <div class="box">4 {{ dummyText }}</div>
        </v-row>
      </div>

      <v-col cols="5">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default {
  name: "BenefitsTile",
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
    dummyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  }),
};
</script>

<style lang="scss" scoped>

.left-half {
  width: 400px;
  margin: 20px;
}

.box {
  border: 1px solid black;
  width: 180px;
  height: 150px;
  margin: 0 5px;
  padding: 10px
}
.second {
  margin-top: 75px; // half the height
  margin-bottom: 10px;
}
.third {
  margin-top: -75px;
}
</style>



