import initKeyboard from "./scripts/start.js";
import setStartHiddenKeys from "./scripts/hidden-keys.js";

initKeyboard();

let language = "";

if (localStorage.getItem("currLanguage") === null || localStorage.getItem("currLanguage") === "en") {
  language = "en";
  setStartHiddenKeys(language);
} else {
  language = "ru";
  setStartHiddenKeys(language);
}
