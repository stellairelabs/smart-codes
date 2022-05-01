<template>
  <v-container>

    <v-row v-if="leftAligned" align="center" class="my-10 flex-wrap-reverse" justify="space-around">
      <v-col cols="5">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </v-col>

      <div class="box-area">
        <v-row>
          <div class="box">
            <span id="number">1</span>
            <p>{{ data[0] }}</p>
          </div>
          <div class="box second">
            <span id="number">2</span>
            <p>{{ data[1] }}</p>
          </div>
        </v-row>
        <v-row>
          <div class="box third">
            <span id="number">3</span>
            <p>{{ data[2] }}</p>
          </div>
          <div class="box">
            <span id="number">4</span>
            <p>{{ data[3] }}</p>
          </div>
        </v-row>
      </div>
    </v-row>

    <v-row v-if="!leftAligned" align="center" class="my-10 flex-wrap-reverse" justify="space-around">
      <div class="box-area">
        <v-row>
          <div class="box">
            <span id="number">1</span>
            <p>{{ data[0] }}</p>
          </div>
          <div class="box second">
            <span id="number">2</span>
            <p>{{ data[1] }}</p>
          </div>
        </v-row>
        <v-row>
          <div class="box third">
            <span id="number">3</span>
            <p>{{ data[2] }}</p>
          </div>
          <div class="box">
            <span id="number">4</span>
            <p>{{ data[3] }}</p>
          </div>
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
    },
    data: Array,
  },
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>

.box-area {
  width: 400px;
  margin: 20px;

  #number {
    background-color: white;
    line-height: 1.23rem;
    position: absolute;
    transform: translate(0, -95%);
  }
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



