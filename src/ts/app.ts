import Vue from "vue";

import "../scss/app.scss";

Vue.component("app", require("./components/App.vue").default);

new Vue({
  el: "#app",
});
