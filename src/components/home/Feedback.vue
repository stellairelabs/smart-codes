<template>
  <v-row class="feedback">
    <v-col cols="12"><h2>Feedback</h2></v-col>
    <v-col>
      <v-row>
        <v-col>
          <h3>What people say...</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card v-for="(feedback, i) in home.feedback" :key="i">
            <v-row>
              <v-col cols="2">
                <v-avatar> <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" /></v-avatar>
              </v-col>
              <v-col cols="">
                <v-card-title>{{ feedback.name }}</v-card-title>
                <v-card-subtitle>{{ feedback.line1 }}<br />{{ feedback.line2 }}</v-card-subtitle>
              </v-col>
              <v-col cols="12" md="6">
                <v-card-text>{{ feedback.feedback }}</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import home from "../../data/home.json";
export default {
  name: "Feedback",
  data: () => ({
    home,
  }),
};
</script>

<style></style>
