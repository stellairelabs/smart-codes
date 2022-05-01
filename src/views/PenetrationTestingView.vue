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

    <ProcessFlow title="Our Penetration Testing Process" :processFlow="process_flow" />

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
import ProcessFlow from "../components/ProcessFlow.vue";

export default {
  name: "PenetrationTesting",
  components: { ProcessFlow },
  data: () => ({
    dummy,
    process_flow: [
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
</style>