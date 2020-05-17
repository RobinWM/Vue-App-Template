import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { request } from "./network/request";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");

request({
  url: "/api/posts"
}).then(res => {
  console.log(res);
});
