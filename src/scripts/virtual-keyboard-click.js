import setCase from "./case.js";
import setStartHiddenKeys from "./hidden-keys.js";
import chooseCurrentFunction from "./generic-function.js";

export default function virtualKeyBoardClick(textarea, key, e, currentState) {
  let {
    currentCase, language, textIndex,
  } = currentState;

  if (key.classList[1] === "CapsLock") {
    if (key.classList[2] !== "active") {
      key.classList.add("active");
      if (currentCase === "down") {
        currentCase = setCase(currentCase, "caps", language);
      } else if (currentCase === "up") {
        currentCase = setCase(currentCase, "shiftCaps", language);
      }
    } else {
      key.classList.remove("active");
      if (currentCase === "caps") {
        currentCase = setCase(currentCase, "down", language);
      } else if (currentCase === "shiftCaps") {
        currentCase = setCase(currentCase, "up", language);
      }
    }
  } else if (key.classList[1] === "ShiftLeft" || key.classList[1] === "ShiftRight") {
    key.classList.add("active");
    if (currentCase === "down") {
      currentCase = setCase(currentCase, "up", language);
    } else if (currentCase === "caps") {
      currentCase = setCase(currentCase, "shiftCaps", language);
    }
  } else {
    key.classList.add("active");
  }

  if (key.classList[1] === "AltLeft") {
    if (document.querySelector(".ControlLeft").classList[2] === "active") {
      if (language === "en") {
        language = setStartHiddenKeys("ru");
        currentCase = setCase(currentCase, currentCase, language);
        localStorage.setItem("language", language);
      } else {
        language = setStartHiddenKeys("en");
        currentCase = setCase(currentCase, currentCase, language);
        localStorage.setItem("language", language);
      }
    }
  } else if (key.classList[1] === "ControlLeft") {
    if (document.querySelector(".AltLeft").classList[2] === "active") {
      if (language === "en") {
        language = setStartHiddenKeys("ru");
        currentCase = setCase(currentCase, currentCase, language);
        localStorage.setItem("language", language);
      } else {
        language = setStartHiddenKeys("en");
        currentCase = setCase(currentCase, currentCase, language);
        localStorage.setItem("language", language);
      }
    }
  }

  const currentKey = e.currentTarget;
  const keyValue = currentKey.querySelector(`.${language}`)
    .querySelector(`.${currentCase}`).innerHTML;

  textIndex = chooseCurrentFunction(keyValue, textIndex, textarea);

  return {
    currentCase,
    language,
    textIndex,
    currentKey,
  };
}
