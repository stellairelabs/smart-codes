<template>
  <v-container>
    <v-layout align-center column pa-15>
      <h1>Our Services</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <v-btn to="/request-a-quote" text outlined>Request A Quote</v-btn>
    </v-layout>

    <v-layout>
      <v-col class="our-services">
        <v-row class="d-flex align-center align-self-start" v-for="(category, i) in services" :key="i">
          <h3 class="category">{{ category.category }}</h3>
          <div class="box" v-for="(service, j) in category.services" :key="j">
            <h4 id="title">{{ service.title }}</h4>
            <p>{{ service.text }}</p>
            <v-btn to="/request-a-quote" text outlined>Learn more</v-btn>
          </div>
        </v-row>
      </v-col>
    </v-layout>
  </v-container>
</template>


<script>
import services from "../data/services.json";
export default {
  name: "Services",
  data: () => ({
    services,
  }),
};
</script>


<style lang="scss" scoped>
.our-services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .category {
    text-decoration: underline;
    width: 120px;
  }
  .box {
    width: 260px;
    height: 260px;
    border: 1px solid black;
    padding: 20px;
    margin: 20px 10px;
    // margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    

    p {
      text-overflow: clip;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 9.1em; // 5 lines of text
      line-height: 1.3em;
    }

    #title {
      max-width: 250px;
      background-color: white;
      text-align: center;
      position: absolute;
      align-self: center;
      word-wrap: break-word;
      transform: translate(0, -135%);
    }
  }
}
</style>