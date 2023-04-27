import keyboardKeys from "../constants/keyboard.js";

function createKey(lang) {
  const key = document.createElement("div");
  key.classList.add(`${lang}`);

  const keyDown = document.createElement("span");
  keyDown.classList.add("down");

  const keyUp = document.createElement("span");
  keyUp.classList.add("up");

  const keyCaps = document.createElement("span");
  keyCaps.classList.add("caps");

  const keyShiftCaps = document.createElement("span");
  keyShiftCaps.classList.add("shiftCaps");

  key.append(keyDown, keyUp, keyCaps, keyShiftCaps);
  return key;
}

function createKeysRow() {
  const keyboardKeyDiv = document.createElement("div");
  keyboardKeyDiv.classList.add("keyboard__key");
  keyboardKeyDiv.append(createKey("en"), createKey("ru"));
  return keyboardKeyDiv;
}

function fillKey(index, key, lang) {
  const langKey = key.querySelector(`.${lang}`);
  const caseDown = langKey.querySelector(".down");
  const caseUp = langKey.querySelector(".up");
  const caps = langKey.querySelector(".caps");
  const shiftCaps = langKey.querySelector(".shiftCaps");

  if (lang === "ru") {
    caseDown.innerHTML = keyboardKeys[index].ru.down;
    caseUp.innerHTML = keyboardKeys[index].ru.up;
    caps.innerHTML = keyboardKeys[index].ru.caps;
    shiftCaps.innerHTML = keyboardKeys[index].ru.shiftCaps;
  } else {
    caseDown.innerHTML = keyboardKeys[index].en.down;
    caseUp.innerHTML = keyboardKeys[index].en.up;
    caps.innerHTML = keyboardKeys[index].en.caps;
    shiftCaps.innerHTML = keyboardKeys[index].en.shiftCaps;
  }

  key.classList.add(keyboardKeys[index].code);
}

export default function initKeyboard() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const textArea = document.createElement("textarea");
  textArea.classList.add("text-area");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "RSS Virtual Keyboard";

  const langInfo = document.createElement("p");
  langInfo.classList.add("lang-info");
  langInfo.innerHTML = "Для переключения языка комбинация: левыe Ctrl + Alt";

  const systemInfo = document.createElement("p");
  systemInfo.classList.add("system-info");
  systemInfo.innerHTML = "Клавиатура создана в операционной системе Windows";

  const keyboardDiv = document.createElement("div");
  keyboardDiv.classList.add("keyboard");

  for (let i = 0; i < 5; i += 1) {
    const rowKeysDiv = document.createElement("div");
    rowKeysDiv.classList.add("keyboard__row");

    let amountOfKeys = 0;
    if (i === 0) {
      amountOfKeys = 14;
    } else if (i === 1) {
      amountOfKeys = 15;
    } else if (i === 2 || i === 3) {
      amountOfKeys = 13;
    } else {
      amountOfKeys = 9;
    }

    for (let j = 0; j < amountOfKeys; j += 1) {
      rowKeysDiv.append(createKeysRow());
    }

    keyboardDiv.append(rowKeysDiv);
  }

  wrapper.append(title, textArea, keyboardDiv, systemInfo, langInfo);

  document.body.append(wrapper);

  const keys = document.querySelectorAll(".keyboard__key");
  keys.forEach((key, index) => {
    fillKey(index, key, "en");
    fillKey(index, key, "ru");
  });
}
