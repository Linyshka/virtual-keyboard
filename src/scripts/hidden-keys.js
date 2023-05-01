function setClasses(lang, key) {
  const langKey = key.querySelector(`.${lang}`);
  langKey.classList.remove("hidden");

  let anotherKey;
  if (lang === "en") {
    anotherKey = key.querySelector(".ru");
  } else {
    anotherKey = key.querySelector(".en");
  }
  anotherKey.classList.add("hidden");

  const keyUp = langKey.querySelector(".up");
  keyUp.classList.add("hidden");

  const keyCaps = langKey.querySelector(".caps");
  keyCaps.classList.add("hidden");

  const keyShiftCaps = langKey.querySelector(".shiftCaps");
  keyShiftCaps.classList.add("hidden");
}

export default function setStartHiddenKeys(lang) {
  const keys = document.querySelectorAll(".keyboard__key");
  keys.forEach((key) => {
    setClasses(lang, key);
  });
}
