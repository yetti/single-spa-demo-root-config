import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication("@yetti/single-spa-demo-nav",
  () => System.import("@yetti/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@yetti/single-spa-demo-page1",
  () => System.import("@yetti/single-spa-demo-page1"),
  isActive.page1,
  { domElement: document.getElementById('page1-container') }
);

registerApplication(
  "@yetti/single-spa-demo-page2",
  () => System.import("@yetti/single-spa-demo-page2"),
  isActive.page2,
  { domElement: document.getElementById('page2-container') }
);

start({
  urlRerouteOnly: true,
});
