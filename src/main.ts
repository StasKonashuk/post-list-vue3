import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "./components/common";
import directives from "./directives";

const app = createApp(App);

components.forEach((c) => {
  app.component(c.name, c);
});

directives.forEach((d) => {
  app.directive(d.name, d);
});

app.use(store).use(router).mount("#app");
