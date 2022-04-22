import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/ServicesView.vue"),
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
    path: "/smart-contract-audit",
    name: "SmartContractAudit",
    component: () => import(/* webpackChunkName: "about" */ "../views/SmartContractAuditView.vue"),
  },
  {
    path: "/penetration-testing",
    name: "PenetrationTesting",
    component: () => import(/* webpackChunkName: "about" */ "../views/PenetrationTestingView.vue"),
  },
  {
    path: "/vulnerability-scanning",
    name: "VulnerabilityScanning",
    component: () => import(/* webpackChunkName: "about" */ "../views/VulnerabilityScanningView.vue"),
  },
  {
    path: "/smart-contract-functional-testing",
    name: "SmartContractFunctionalTesting",
    component: () => import(/* webpackChunkName: "about" */ "../views/SmartContractFunctionalTestingView.vue"),
  },
  {
    path: "/smart-contract-development",
    name: "SmartContractDevelopment",
    component: () => import(/* webpackChunkName: "about" */ "../views/SmartContractDevelopmentView.vue"),
  },
  {
    path: "/blockchain-development",
    name: "BlockchainDevelopment",
    component: () => import(/* webpackChunkName: "about" */ "../views/BlockchainDevelopmentView.vue"),
  },
  {
    path: "/dapp-development",
    name: "dAppDevelopment",
    component: () => import(/* webpackChunkName: "about" */ "../views/dAppDevelopmentView.vue"),
  },
  {
    path: "/blockchain-consulting",
    name: "BlockchainConsulting",
    component: () => import(/* webpackChunkName: "about" */ "../views/BlockchainConsultingView.vue"),
  },
  {
    path: "/blockchain-consulting",
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
