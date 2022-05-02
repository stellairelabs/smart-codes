import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import PenetrationTestingView from "../views/PenetrationTestingView.vue";
import SmartContractDevelopmentView from "../views/SmartContractDevelopmentView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "about" */ "../views/BlogView.vue"),
  },
  {
    path: "/request-a-quote",
    name: "RequestAQuote",
    component: () => import(/* webpackChunkName: "about" */ "../views/RequestAQuoteView.vue"),
  },
  {
    path: "/services/smart-contract-audit",
    name: "SmartContractAudit",
    component: () => import(/* webpackChunkName: "about" */ "../views/SmartContractAuditView.vue"),
  },
  {
    path: "/services/penetration-testing",
    name: "PenetrationTesting",
    component: PenetrationTestingView,
  },
  {
    path: "/services/vulnerability-scanning",
    name: "VulnerabilityScanning",
    component: () => import(/* webpackChunkName: "about" */ "../views/VulnerabilityScanningView.vue"),
  },
  {
    path: "/services/smart-contract-functional-testing",
    name: "SmartContractFunctionalTesting",
    component: () => import(/* webpackChunkName: "about" */ "../views/SmartContractFunctionalTestingView.vue"),
  },
  {
    path: "/services/smart-contract-development",
    name: "SmartContractDevelopment",
    component: SmartContractDevelopmentView,
  },
  {
    path: "/services/blockchain-development",
    name: "BlockchainDevelopment",
    component: () => import(/* webpackChunkName: "about" */ "../views/BlockchainDevelopmentView.vue"),
  },
  {
    path: "/services/dapp-development",
    name: "dAppDevelopment",
    component: () => import(/* webpackChunkName: "about" */ "../views/dAppDevelopmentView.vue"),
  },
  {
    path: "/services/blockchain-consulting",
    name: "BlockchainConsulting",
    component: () => import(/* webpackChunkName: "about" */ "../views/BlockchainConsultingView.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
