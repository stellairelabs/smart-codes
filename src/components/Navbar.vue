<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-img class="shrink mr-" contain :src="logo" width="40" />
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <div class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in menuItems" :key="i" :to="item.path" text rounded large>
          {{ item.title }}
        </v-btn>
        <v-btn to="/request-a-quote" text outlined x-large> Request A Quote </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-btn to="/request-a-quote" text outlined> Request A Quote </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { logo, menuItems } from "../data/navAndFooter";
export default {
  name: "Navbar",
  data: () => ({
    logo,
    menuItems,
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>
