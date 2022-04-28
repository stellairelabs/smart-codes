<template>
  <v-row class="feedback">
    <v-col cols="12"><h2 class="feedback__title">Feedback</h2></v-col>
    <v-col>
      <v-row>
        <v-col>
          <h3 class="feedback__subtitle">What people say...</h3>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-card v-for="(item, i) in feedback" :key="i" class="feedback-card" flat>
          <v-row>
            <v-col>
              <v-avatar> <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" /></v-avatar>
            </v-col>
            <v-col>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-subtitle>{{ item.company }}<br />{{ item.designation }}</v-card-subtitle>
            </v-col>
            <v-col cols="12" md="8">
              <v-card-text>{{ item.feedback }}</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { feedback } from "../../data/home.js";
export default {
  name: "Feedback",
  data: () => ({
    feedback,
  }),
};
</script>

<style>
.feedback__title {
  text-align: center;
  font-weight: bold;
}

.feedback__subtitle {
  text-align: center;
}
.feedback-card {
  text-align: justify;
}

@media only screen and (min-width: 960px) {
  .feedback-card {
    width: 60%;
  }
}
</style>
