import initKeyboard from "./scripts/start.js";
import setStartHiddenKeys from "./scripts/hidden-keys.js";
import virtualKeyBoardClick from "./scripts/virtual-keyboard-click.js";
import setCase from "./scripts/case.js";
import { keyDown, keyUp } from "./scripts/real-keyboard-click.js";

initKeyboard();

const keys = document.querySelectorAll(".keyboard__key");
const textarea = document.querySelector(".text-area");
const currentState = {
  currentCase: "down",
  language: "",
  isCapsPress: false,
  isShiftPress: false,
  isCtrlPress: false,
  isAltPress: false,
  textIndex: 0,
  currentKey: "",
};

if (localStorage.getItem("language") === null || localStorage.getItem("language") === "en") {
  currentState.language = "en";
  setStartHiddenKeys(currentState.language);
} else {
  currentState.language = "ru";
  setStartHiddenKeys(currentState.language);
}

keys.forEach((key) => {
  key.addEventListener("mousedown", (event) => {
    const newState = virtualKeyBoardClick(textarea, key, event, currentState);
    currentState.language = newState.language;
    currentState.currentCase = newState.currentCase;
    currentState.textIndex = newState.textIndex;
    currentState.currentKey = newState.currentKey;
  });
});

document.addEventListener("mouseup", () => {
  const { currentKey, language, currentCase } = currentState;
  if (currentKey) {
    if (currentKey.classList[1] !== "CapsLock") {
      currentKey.classList.remove("active");
    }
    if (currentKey.classList[1] === "ShiftLeft" || currentKey.classList[1] === "ShiftRight") {
      if (currentCase === "up") {
        currentState.currentCase = setCase(currentCase, "down", language);
      } else if (currentCase === "shiftCaps") {
        console.log(1);
        currentState.currentCase = setCase(currentCase, "up", language);
      }
    }
  }
});

textarea.addEventListener("click", (e) => {
  currentState.textIndex = e.currentTarget.selectionStart;
});

document.addEventListener("keydown", (e) => {
  const newState = keyDown(textarea, e, currentState);
  currentState.language = newState.language;
  currentState.currentCase = newState.currentCase;
  currentState.textIndex = newState.textIndex;
  currentState.isAltPress = newState.isAltPress;
  currentState.isCapsPress = newState.isCapsPress;
  currentState.isCtrlPress = newState.isCtrlPress;
  currentState.isShiftPress = newState.isShiftPress;
});

document.addEventListener("keyup", (e) => {
  const newState = keyUp(e, currentState);
  currentState.currentCase = newState.currentCase;
  currentState.isAltPress = newState.isAltPress;
  currentState.isCapsPress = newState.isCapsPress;
  currentState.isCtrlPress = newState.isCtrlPress;
  currentState.isShiftPress = newState.isShiftPress;
});

document.onkeydown = (e) => {
  e.preventDefault();
};
