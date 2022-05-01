<template>
  <v-footer padless class="footer">
    <v-container>
      <!-- Request a Quote -->
      <v-row class="footer__request-a-quote" align="center">
        <v-col cols="12" md="8" class="footer__request-a-quote__text">
          {{ footerRequestAQuote }}
        </v-col>
        <v-col class="footer__request-a-quote__btn">
          <v-btn to="/request-a-quote">Request a Quote</v-btn>
        </v-col>
      </v-row>

      <!-- Logo and Text -->
      <v-row align="center">
        <v-col cols="12" sm="6" md="4">
          <v-img max-height="150" max-width="250" contain :src="logo"></v-img>
          <p>{{ footerText }}</p>
        </v-col>

        <!-- Subscribe to our newsletter -->
        <v-col cols="12" sm="6" md="4" class="footer__newsletter">
          <p><strong>Subscribe to our newsletter</strong></p>
          <v-text-field single-line outlined type="email" placeholder="Your Email" dense></v-text-field>
          <v-btn>Subscribe</v-btn>
        </v-col>

        <!-- Links -->
        <v-col cols="12" md="2" class="footer__links">
          <v-list flat color="transparent" class="footer__links">
            <v-list-item class="footer__links__link" v-for="(item, i) in menuItems" :key="i" :to="item.path">{{ item.title }}</v-list-item>
          </v-list>
        </v-col>

        <!-- Social -->
        <v-col cols="12" md="2">
          <v-btn class="hidden-md-and-up" v-for="(item, i) in socialmedia" :key="i" icon :href="item.link" target="__blank">
            <v-icon size="24px"> mdi-{{ item.icon }} </v-icon>
          </v-btn>

          <v-list class="hidden-sm-and-down" color="transparent">
            <v-list-item v-for="(item, i) in socialmedia" :key="i" :href="item.link" target="__blank">
              <v-icon>mdi-{{ item.icon }}</v-icon
              >{{ item.social }}</v-list-item
            >
          </v-list>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <p>&copy; {{ new Date().getFullYear() }} — SmartCodes</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { logo, footerRequestAQuote, footerText, menuItems, socialmedia } from "../data/navAndFooter";
export default {
  name: "Footer",
  data: () => ({
    logo,
    footerRequestAQuote,
    footerText,
    menuItems,
    socialmedia,
  }),
};
</script>

<style scoped>
.footer__request-a-quote {
  border: 1px solid black;
  margin: auto;
  text-align: center;
}

.footer__newsletter {
  text-align: center;
}

@media (min-width: 960px) {
  .footer__request-a-quote {
    width: 70vw;
  }
}
</style>
