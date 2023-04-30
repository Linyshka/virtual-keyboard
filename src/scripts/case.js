export default function setCase(currentCase, newCase, language) {
  let newCasz = newCase;
  const keys = document.querySelectorAll(".keyboard__key");

  keys.forEach((key) => {
    const down = key.querySelector(`.${language}`).querySelector(".down");
    const up = key.querySelector(`.${language}`).querySelector(".up");
    const caps = key.querySelector(`.${language}`).querySelector(".caps");
    const shiftCaps = key.querySelector(`.${language}`).querySelector(".shiftCaps");
    if (newCase === "up") {
      if (currentCase === "caps") {
        newCasz = "shiftCaps";
      } else {
        down.classList.add("hidden");
        shiftCaps.classList.add("hidden");
        up.classList.remove("hidden");
      }
    }
    if (newCasz === "caps") {
      if (currentCase === "up") {
        newCasz = "shiftCaps";
      } else {
        down.classList.add("hidden");
        shiftCaps.classList.add("hidden");
        caps.classList.remove("hidden");
      }
    }
    if (newCase === "shiftCaps") {
      down.classList.add("hidden");
      up.classList.add("hidden");
      caps.classList.add("hidden");
      shiftCaps.classList.remove("hidden");
    }
    if (newCase === "down") {
      if (currentCase === "shiftCaps") {
        shiftCaps.classList.add("hidden");
        up.classList.remove("hidden");
      } else {
        down.classList.remove("hidden");
        up.classList.add("hidden");
        caps.classList.add("hidden");
        shiftCaps.classList.add("hidden");
      }
    }
  });
  return newCasz;
}
