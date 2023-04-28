import setCase from "./case.js";
import setStartHiddenKeys from "./hidden-keys.js";

function insertChar(newChar, textIndex, textarea) {
  let textIndez = textIndex;
  const textarez = textarea;
  textarez.value = (textarea.value.slice(0, textIndex) + newChar + textarea.value.slice(textIndex));
  textIndez += 1;
  textarez.selectionStart = textIndex;
  textarez.selectionEnd = textIndex;
  return textIndez;
}

function deleteChar(choise, textIndex, textarea) {
  let textIndez = textIndex;
  const textarez = textarea;
  if (choise === true) {
    if (textIndex > 0) {
      textarez.value = textarez.value.slice(0, textIndez - 1) + textarez.value.slice(textIndez);
      textIndez -= 1;
      textarez.selectionStart = textIndez;
      textarez.selectionEnd = textIndez;
    }
  } else {
    textarez.value = textarez.value.slice(0, textIndez) + textarez.value.slice(textIndez + 1);
    textarez.selectionStart = textIndez;
    textarez.selectionEnd = textIndez;
  }
  return textIndez;
}

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
        currentCase = setCase(currentCase, "caseUp", language);
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
        localStorage.setItem("language", language);
      } else {
        language = setStartHiddenKeys("en");
        localStorage.setItem("language", language);
      }
    }
  }

  const currentKey = e.currentTarget;
  const keyValue = currentKey.querySelector(`.${language}`)
    .querySelector(`.${currentCase}`).innerHTML;

  if (keyValue.length <= 1 && keyValue !== "\u269D") {
    textIndex = insertChar(keyValue, textIndex, textarea);
  }
  if (keyValue === "Backspace") {
    textIndex = deleteChar(true, textIndex, textarea);
  }
  if (keyValue === "Del") {
    textIndex = deleteChar(false, textIndex, textarea);
  }
  if (keyValue === "Tab") {
    textIndex = insertChar("    ", textIndex, textarea);
  }
  if (keyValue === "Enter") {
    textIndex = insertChar("\n", textIndex, textarea);
  }
  if (keyValue === "&amp;") {
    textIndex = insertChar("\u0026", textIndex, textarea);
  }
  if (keyValue === "&lt;") {
    textIndex = insertChar("\u003C", textIndex, textarea);
  }
  if (keyValue === "&gt;") {
    textIndex = insertChar("\u003E", textIndex, textarea);
  }
  return {
    currentCase,
    language,
    textIndex,
    currentKey,
  };
}
