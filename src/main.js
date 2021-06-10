/*!

=========================================================
* Vue Argon Dashboard - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-argon-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import App from "./App.vue";
import { createApp } from "vue";
import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
//import VueTimeago from "vue-timeago";

import router from "./router";
import store from "./store/index";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";
import "sweetalert2/dist/sweetalert2.min.css";

axios.defaults.baseURL = "http://projet.chdesplancke.xyz:3000/";
axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ArgonDashboard);
app.use(VueSweetalert2);

app.mount("#app");
