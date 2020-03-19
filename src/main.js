import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/style.css";

import VueFilterDateFormat from "vue-filter-date-format";
Vue.use(VueFilterDateFormat);

import VueFilterDateParse from "vue-filter-date-parse";
Vue.use(VueFilterDateParse);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
