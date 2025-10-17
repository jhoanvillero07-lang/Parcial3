import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import Aura from "@primevue/themes/aura";


import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password'; 

import App from "./App.vue";

const app = createApp (App);


app.component("InputText", InputText);

app.component("PrimePassword", Password); 
app.component("DialogModal", Dialog);
app.component("ButtonPrime", Button);


app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount("#app");

export { app };