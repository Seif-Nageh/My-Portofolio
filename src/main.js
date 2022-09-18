import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserTie,
  faBarsStaggered,
  faPaintbrush,
  faAt,
  faEnvelope,
  faCode,
  faMobileScreenButton,
  faMagnifyingGlassLocation,
  faBriefcase,
  faGraduationCap,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faUserTie,
  faBarsStaggered,
  faPaintbrush,
  faAt,
  faGithub,
  faLinkedinIn,
  faEnvelope,
  faWhatsapp,
  faCode,
  faMobileScreenButton,
  faMagnifyingGlassLocation,
  faBriefcase,
  faGraduationCap,
  faFlag
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
