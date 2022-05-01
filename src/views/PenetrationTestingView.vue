<template>
  <v-container>
    <v-row align="center" class="mb-15" justify="space-between">
      <v-col cols="5">
        <h1>Penetration Testing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <v-btn to="/request-a-quote" text outlined>Request A Quote</v-btn>
      </v-col>
      <v-col cols="6">
        <v-img :src="dummy" alt="" max-width="550px" />
      </v-col>
    </v-row>

    <v-row align="center" justify="space-between" class="mb-15">
      <v-col cols="6">
        <v-img :src="dummy" alt="" max-width="550px" />
      </v-col>
      <v-col cols="5">
        <h1>Why should you do a Penetration Test?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-5">
      <h1>Our Penetration Testing Process</h1>
    </v-row>
    <v-row class="pentest-process mb-15" >
      <v-col xs="12" sm="6" md="4" lg="" v-for="(process, i) in pentestProcess" :key="i">
        <v-row justify="center">
          <v-col cols="6" align="center" align-self="center">
            <v-avatar size="100"><v-img :src="process.image" /></v-avatar>
            <h3>Step {{ i + 1 }}</h3>
            <span>{{ process.name }}</span>
          </v-col>
          <v-col cols="6" align-self="start" class="pt-8" v-if="i != 4">
            <v-img :src="arrow" width="100px" />
          </v-col>
          <v-col cols="6" align="center" v-if="i == 4">
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row align="center" justify="space-between">
      <v-col cols="5">
        <h1 class="mb-5">Why choose SMART CODES?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </v-col>
      <v-col cols="6">
        <v-img :src="dummy" alt="" max-width="550px" />
      </v-col>
    </v-row>

  </v-container>
</template>


<script>
import dummy from "../assets/dummy.png";
import arrow from "../assets/arrow.png";

export default {
  name: "PenetrationTesting",
  data: () => ({
    dummy,
    arrow,
    pentestProcess: [
      { name: "Share Source Code", image: dummy },
      { name: "Receive Quote", image: dummy },
      { name: "Begin Vulnerability Scanning", image: dummy },
      { name: "Suggest Remediations", image: dummy },
      { name: "Deliver Report", image: dummy },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.pentest-process {
  padding: 0 50px;
}
</style>