import { orchestrate } from "./orchestrate";

const demoTask = {
  title: "Add Refund Policy page",
  description: "Create a launch-ready policy page, wire it into routing, and update the footer link.",
  changedFiles: ["src/App.tsx", "src/components/Footer.tsx", "src/pages/RefundPolicyPage.tsx"]
};

console.log(JSON.stringify(orchestrate(demoTask), null, 2));

