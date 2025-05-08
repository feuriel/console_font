import "./style.css";
import { Logger, Logger2 } from "./components";

document.querySelector("#app").innerHTML = `
  <div>
Open the console debugger to see a test of both fonts
  </div>
`;

console.log("Inspired greatly from figlet");
console.log(
  "-------------------------------------------------------------------------------------------------------------------"
);
Logger2("TEST");
console.log(
  "-------------------------------------------------------------------------------------------------------------------"
);
Logger("Example");
console.log(
  "-------------------------------------------------------------------------------------------------------------------"
);
Logger("MADE  BY:");
Logger("GABRIEL.S");
