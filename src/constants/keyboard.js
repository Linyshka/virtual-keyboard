const keyboardKeys = [
  {
    code: "Backquote",
    ru: {
      down: "ё",
      up: "Ё",
      caps: "Ё",
      shiftCaps: "ё",
    },
    en: {
      down: "`",
      up: "~",
      caps: "`",
      shiftCaps: "~",
    },
  },
  {
    code: "Digit1",
    ru: {
      down: "1",
      up: "!",
      caps: "1",
      shiftCaps: "!",
    },
    en: {
      down: "1",
      up: "!",
      caps: "1",
      shiftCaps: "!",
    },
  },
  {
    code: "Digit2",
    ru: {
      down: "2",
      up: "\"",
      caps: "2",
      shiftCaps: "\"",
    },
    en: {
      down: "2",
      up: "@",
      caps: "2",
      shiftCaps: "@",
    },
  },
  {
    code: "Digit3",
    ru: {
      down: "3",
      up: "№",
      caps: "3",
      shiftCaps: "№",
    },
    en: {
      down: "3",
      up: "#",
      caps: "3",
      shiftCaps: "#",
    },
  },
  {
    code: "Digit4",
    ru: {
      down: "4",
      up: ";",
      caps: "4",
      shiftCaps: ";",
    },
    en: {
      down: "4",
      up: "$",
      caps: "4",
      shiftCaps: "$",
    },
  },
  {
    code: "Digit5",
    ru: {
      down: "5",
      up: "%",
      caps: "5",
      shiftCaps: "%",
    },
    en: {
      down: "5",
      up: "%",
      caps: "5",
      shiftCaps: "%",
    },
  },
  {
    code: "Digit6",
    ru: {
      down: "6",
      up: ":",
      caps: "6",
      shiftCaps: ":",
    },
    en: {
      down: "6",
      up: "^",
      caps: "6",
      shiftCaps: "^",
    },
  },
  {
    code: "Digit7",
    ru: {
      down: "7",
      up: "?",
      caps: "7",
      shiftCaps: "?",
    },
    en: {
      down: "7",
      up: "&",
      caps: "7",
      shiftCaps: "&",
    },
  },
  {
    code: "Digit8",
    ru: {
      down: "8",
      up: "*",
      caps: "8",
      shiftCaps: "*",
    },
    en: {
      down: "8",
      up: "*",
      caps: "8",
      shiftCaps: "*",
    },
  },
  {
    code: "Digit9",
    ru: {
      down: "9",
      up: "(",
      caps: "9",
      shiftCaps: "(",
    },
    en: {
      down: "9",
      up: "(",
      caps: "9",
      shiftCaps: "(",
    },
  },
  {
    code: "Digit0",
    ru: {
      down: "0",
      up: ")",
      caps: "0",
      shiftCaps: ")",
    },
    en: {
      down: "0",
      up: ")",
      caps: "0",
      shiftCaps: ")",
    },
  },
  {
    code: "Minus",
    ru: {
      down: "-",
      up: "_",
      caps: "-",
      shiftCaps: "_",
    },
    en: {
      down: "-",
      up: "_",
      caps: "-",
      shiftCaps: "_",
    },
  },
  {
    code: "Equal",
    ru: {
      down: "=",
      up: "+",
      caps: "=",
      shiftCaps: "+",
    },
    en: {
      down: "=",
      up: "+",
      caps: "=",
      shiftCaps: "+",
    },
  },
  {
    code: "Backspace",
    ru: {
      down: "Backspace",
      up: "Backspace",
      caps: "Backspace",
      shiftCaps: "Backspace",
    },
    en: {
      down: "Backspace",
      up: "Backspace",
      caps: "Backspace",
      shiftCaps: "Backspace",
    },
  },
  {
    code: "Tab",
    ru: {
      down: "Tab",
      up: "Tab",
      caps: "Tab",
      shiftCaps: "Tab",
    },
    en: {
      down: "Tab",
      up: "Tab",
      caps: "Tab",
      shiftCaps: "Tab",
    },
  },
  {
    code: "Q",
    ru: {
      down: "й",
      up: "Й",
      caps: "Й",
      shiftCaps: "й",
    },
    en: {
      down: "q",
      up: "Q",
      caps: "Q",
      shiftCaps: "q",
    },
  },
  {
    code: "W",
    ru: {
      down: "ц",
      up: "Ц",
      caps: "Ц",
      shiftCaps: "ц",
    },
    en: {
      down: "w",
      up: "W",
      caps: "W",
      shiftCaps: "w",
    },
  },
  {
    code: "E",
    ru: {
      down: "у",
      up: "У",
      caps: "У",
      shiftCaps: "у",
    },
    en: {
      down: "e",
      up: "E",
      caps: "E",
      shiftCaps: "e",
    },
  },
  {
    code: "R",
    ru: {
      down: "к",
      up: "К",
      caps: "К",
      shiftCaps: "к",
    },
    en: {
      down: "r",
      up: "R",
      caps: "R",
      shiftCaps: "r",
    },
  },
  {
    code: "T",
    ru: {
      down: "е",
      up: "Е",
      caps: "Е",
      shiftCaps: "е",
    },
    en: {
      down: "t",
      up: "T",
      caps: "T",
      shiftCaps: "t",
    },
  },
  {
    code: "Y",
    ru: {
      down: "н",
      up: "Н",
      caps: "Н",
      shiftCaps: "н",
    },
    en: {
      down: "y",
      up: "Y",
      caps: "Y",
      shiftCaps: "y",
    },
  },
  {
    code: "U",
    ru: {
      down: "г",
      up: "Г",
      caps: "Г",
      shiftCaps: "г",
    },
    en: {
      down: "u",
      up: "U",
      caps: "U",
      shiftCaps: "u",
    },
  },
  {
    code: "I",
    ru: {
      down: "ш",
      up: "Ш",
      caps: "Ш",
      shiftCaps: "ш",
    },
    en: {
      down: "i",
      up: "I",
      caps: "I",
      shiftCaps: "i",
    },
  },
  {
    code: "O",
    ru: {
      down: "щ",
      up: "Щ",
      caps: "Щ",
      shiftCaps: "щ",
    },
    en: {
      down: "o",
      up: "O",
      caps: "O",
      shiftCaps: "o",
    },
  },
  {
    code: "P",
    ru: {
      down: "з",
      up: "З",
      caps: "З",
      shiftCaps: "з",
    },
    en: {
      down: "p",
      up: "P",
      caps: "P",
      shiftCaps: "p",
    },
  },
  {
    code: "BracketLeft",
    ru: {
      down: "х",
      up: "Х",
      caps: "Х",
      shiftCaps: "х",
    },
    en: {
      down: "[",
      up: "{",
      caps: "[",
      shiftCaps: "{",
    },
  },
  {
    code: "BracketRight",
    ru: {
      down: "ъ",
      up: "Ъ",
      caps: "Ъ",
      shiftCaps: "ъ",
    },
    en: {
      down: "]",
      up: "}",
      caps: "]",
      shiftCaps: "}",
    },
  },
  {
    code: "Backslash",
    ru: {
      down: "\\",
      up: "/",
      caps: "\\",
      shiftCaps: "/",
    },
    en: {
      down: "\\",
      up: "|",
      caps: "\\",
      shiftCaps: "|",
    },
  },
  {
    code: "Delete",
    ru: {
      down: "Del",
      up: "Del",
      caps: "Del",
      shiftCaps: "Del",
    },
    en: {
      down: "Del",
      up: "Del",
      caps: "Del",
      shiftCaps: "Del",
    },
  },
  {
    code: "CapsLock",
    ru: {
      down: "CapsLock",
      up: "CapsLock",
      caps: "CapsLock",
      shiftCaps: "CapsLock",
    },
    en: {
      down: "CapsLock",
      up: "CapsLock",
      caps: "CapsLock",
      shiftCaps: "CapsLock",
    },
  },
  {
    code: "A",
    ru: {
      down: "ф",
      up: "Ф",
      caps: "Ф",
      shiftCaps: "ф",
    },
    en: {
      down: "a",
      up: "A",
      caps: "A",
      shiftCaps: "a",
    },
  },
  {
    code: "S",
    ru: {
      down: "ы",
      up: "Ы",
      caps: "Ы",
      shiftCaps: "ы",
    },
    en: {
      down: "s",
      up: "S",
      caps: "S",
      shiftCaps: "s",
    },
  },
  {
    code: "D",
    ru: {
      down: "в",
      up: "В",
      caps: "В",
      shiftCaps: "в",
    },
    en: {
      down: "d",
      up: "D",
      caps: "D",
      shiftCaps: "d",
    },
  },
  {
    code: "F",
    ru: {
      down: "а",
      up: "А",
      caps: "А",
      shiftCaps: "а",
    },
    en: {
      down: "f",
      up: "F",
      caps: "F",
      shiftCaps: "f",
    },
  },
  {
    code: "G",
    ru: {
      down: "п",
      up: "П",
      caps: "П",
      shiftCaps: "п",
    },
    en: {
      down: "g",
      up: "G",
      caps: "G",
      shiftCaps: "g",
    },
  },
  {
    code: "H",
    ru: {
      down: "р",
      up: "Р",
      caps: "Р",
      shiftCaps: "р",
    },
    en: {
      down: "h",
      up: "H",
      caps: "H",
      shiftCaps: "h",
    },
  },
  {
    code: "J",
    ru: {
      down: "о",
      up: "О",
      caps: "О",
      shiftCaps: "о",
    },
    en: {
      down: "j",
      up: "J",
      caps: "J",
      shiftCaps: "j",
    },
  },
  {
    code: "K",
    ru: {
      down: "л",
      up: "Л",
      caps: "Л",
      shiftCaps: "л",
    },
    en: {
      down: "k",
      up: "K",
      caps: "K",
      shiftCaps: "k",
    },
  },
  {
    code: "L",
    ru: {
      down: "д",
      up: "Д",
      caps: "Д",
      shiftCaps: "д",
    },
    en: {
      down: "l",
      up: "L",
      caps: "L",
      shiftCaps: "l",
    },
  },
  {
    code: "Semicolon",
    ru: {
      down: "ж",
      up: "Ж",
      caps: "Ж",
      shiftCaps: "ж",
    },
    en: {
      down: ";",
      up: ":",
      caps: ";",
      shiftCaps: ":",
    },
  },
  {
    code: "Quote",
    ru: {
      down: "э",
      up: "Э",
      caps: "Э",
      shiftCaps: "э",
    },
    en: {
      down: "'",
      up: "\"",
      caps: "'",
      shiftCaps: "\"",
    },
  },
  {
    code: "Enter",
    ru: {
      down: "Enter",
      up: "Enter",
      caps: "Enter",
      shiftCaps: "Enter",
    },
    en: {
      down: "Enter",
      up: "Enter",
      caps: "Enter",
      shiftCaps: "Enter",
    },
  },
  {
    code: "ShiftLeft",
    ru: {
      down: "Shift",
      up: "Shift",
      caps: "Shift",
      shiftCaps: "Shift",
    },
    en: {
      down: "Shift",
      up: "Shift",
      caps: "Shift",
      shiftCaps: "Shift",
    },
  },
  {
    code: "Z",
    ru: {
      down: "я",
      up: "Я",
      caps: "Я",
      shiftCaps: "я",
    },
    en: {
      down: "z",
      up: "Z",
      caps: "Z",
      shiftCaps: "z",
    },
  },
  {
    code: "X",
    ru: {
      down: "ч",
      up: "Ч",
      caps: "Ч",
      shiftCaps: "ч",
    },
    en: {
      down: "x",
      up: "X",
      caps: "X",
      shiftCaps: "x",
    },
  },
  {
    code: "C",
    ru: {
      down: "с",
      up: "С",
      caps: "С",
      shiftCaps: "с",
    },
    en: {
      down: "c",
      up: "C",
      caps: "C",
      shiftCaps: "c",
    },
  },
  {
    code: "V",
    ru: {
      down: "м",
      up: "М",
      caps: "М",
      shiftCaps: "м",
    },
    en: {
      down: "v",
      up: "V",
      caps: "V",
      shiftCaps: "v",
    },
  },
  {
    code: "B",
    ru: {
      down: "и",
      up: "И",
      caps: "И",
      shiftCaps: "и",
    },
    en: {
      down: "b",
      up: "B",
      caps: "B",
      shiftCaps: "b",
    },
  },
  {
    code: "N",
    ru: {
      down: "т",
      up: "Т",
      caps: "Т",
      shiftCaps: "т",
    },
    en: {
      down: "n",
      up: "N",
      caps: "N",
      shiftCaps: "n",
    },
  },
  {
    code: "M",
    ru: {
      down: "ь",
      up: "Ь",
      caps: "Ь",
      shiftCaps: "ь",
    },
    en: {
      down: "m",
      up: "M",
      caps: "M",
      shiftCaps: "m",
    },
  },
  {
    code: "Comma",
    ru: {
      down: "б",
      up: "Б",
      caps: "Б",
      shiftCaps: "б",
    },
    en: {
      down: ",",
      up: "<",
      caps: ",",
      shiftCaps: "<",
    },
  },
  {
    code: "Period",
    ru: {
      down: "ю",
      up: "Ю",
      caps: "Ю",
      shiftCaps: "ю",
    },
    en: {
      down: ".",
      up: ">",
      caps: ".",
      shiftCaps: ">",
    },
  },
  {
    code: "Slash",
    ru: {
      down: ".",
      up: ",",
      caps: ".",
      shiftCaps: ",",
    },
    en: {
      down: "/",
      up: "?",
      caps: "/",
      shiftCaps: "?",
    },
  },
  {
    code: "ArrowUp",
    ru: {
      down: "\u1403",
      up: "\u1403",
      caps: "\u1403",
      shiftCaps: "\u1403",
    },
    en: {
      down: "\u1403",
      up: "\u1403",
      caps: "\u1403",
      shiftCaps: "\u1403",
    },
  },
  {
    code: "ShiftRight",
    ru: {
      down: "Shift",
      up: "Shift",
      caps: "Shift",
      shiftCaps: "Shift",
    },
    en: {
      down: "Shift",
      up: "Shift",
      caps: "Shift",
      shiftCaps: "Shift",
    },
  },
  {
    code: "ControlLeft",
    ru: {
      down: "Ctrl",
      up: "Ctrl",
      caps: "Ctrl",
      shiftCaps: "Ctrl",
    },
    en: {
      down: "Ctrl",
      up: "Ctrl",
      caps: "Ctrl",
      shiftCaps: "Ctrl",
    },
  },
  {
    code: "MetaLeft",
    ru: {
      down: "Win",
      up: "Win",
      caps: "Win",
      shiftCaps: "Win",
    },
    en: {
      down: "Win",
      up: "Win",
      caps: "Win",
      shiftCaps: "Win",
    },
  },
  {
    code: "AltLeft",
    ru: {
      down: "Alt",
      up: "Alt",
      caps: "Alt",
      shiftCaps: "Alt",
    },
    en: {
      down: "Alt",
      up: "Alt",
      caps: "Alt",
      shiftCaps: "Alt",
    },
  },
  {
    code: "Space",
    ru: {
      down: " ",
      up: " ",
      caps: " ",
      shiftCaps: " ",
    },
    en: {
      down: " ",
      up: " ",
      caps: " ",
      shiftCaps: " ",
    },
  },
  {
    code: "AltRight",
    ru: {
      down: "Alt",
      up: "Alt",
      caps: "Alt",
      shiftCaps: "Alt",
    },
    en: {
      down: "Alt",
      up: "Alt",
      caps: "Alt",
      shiftCaps: "Alt",
    },
  },
  {
    code: "ArrowLeft",
    ru: {
      down: "\u140A",
      up: "\u140A",
      caps: "\u140A",
      shiftCaps: "\u140A",
    },
    en: {
      down: "\u140A",
      up: "\u140A",
      caps: "\u140A",
      shiftCaps: "\u140A",
    },
  },
  {
    code: "ArrowDown",
    ru: {
      down: "\u1401",
      up: "\u1401",
      caps: "\u1401",
      shiftCaps: "\u1401",
    },
    en: {
      down: "\u1401",
      up: "\u1401",
      caps: "\u1401",
      shiftCaps: "\u1401",
    },
  },
  {
    code: "ArrowRight",
    ru: {
      down: "\u1405",
      up: "\u1405",
      caps: "\u1405",
      shiftCaps: "\u1405",
    },
    en: {
      down: "\u1405",
      up: "\u1405",
      caps: "\u1405",
      shiftCaps: "\u1405",
    },
  },
  {
    code: "ControlRight",
    ru: {
      down: "Ctrl",
      up: "Ctrl",
      caps: "Ctrl",
      shiftCaps: "Ctrl",
    },
    en: {
      down: "Ctrl",
      up: "Ctrl",
      caps: "Ctrl",
      shiftCaps: "Ctrl",
    },
  },
];

export default keyboardKeys;
