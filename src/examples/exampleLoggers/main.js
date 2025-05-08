import "./style.css";
import { LoggerBulbHead, Logger3D } from "../../index.js";

document.querySelector("#app").innerHTML = `
  <div>
Open the console debugger to see a test of both fonts
  </div>
`;

console.log("Inspired greatly from figlet");
console.log(
  "-------------------------------------------------------------------------------------------------------------------"
);
Logger3D("TEST");
console.log(
  "-------------------------------------------------------------------------------------------------------------------"
);
LoggerBulbHead("Example");
console.log(
  "-------------------------------------------------------------------------------------------------------------------"
);
LoggerBulbHead("MADE  BY:");
LoggerBulbHead("GABRIEL.S");
