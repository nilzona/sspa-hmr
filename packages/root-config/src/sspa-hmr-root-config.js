import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sspa-hmr/hmr-react",
  app: () => System.import("@sspa-hmr/hmr-react"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
