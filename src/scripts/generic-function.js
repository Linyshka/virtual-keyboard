function insertChar(newChar, textIndex, textarea) {
  let textIndez = textIndex;
  const textarez = textarea;
  textarez.value = textarea.value.slice(0, textIndex) + newChar + textarea.value.slice(textIndex);
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

export default function chooseCurrentFunction(key, textIndex, textarea) {
  let textIndez = textIndex;
  if (key.length <= 1 && key !== "\u269D") {
    textIndez = insertChar(key, textIndex, textarea);
  }
  if (key === "Backspace") {
    textIndez = deleteChar(true, textIndex, textarea);
  }
  if (key === "Del") {
    textIndez = deleteChar(false, textIndex, textarea);
  }
  if (key === "Tab") {
    textIndez = insertChar("\u0009", textIndex, textarea);
  }
  if (key === "Enter") {
    textIndez = insertChar("\n", textIndex, textarea);
  }
  if (key === "&amp;") {
    textIndez = insertChar("\u0026", textIndex, textarea);
  }
  if (key === "&lt;") {
    textIndez = insertChar("\u003C", textIndex, textarea);
  }
  if (key === "&gt;") {
    textIndez = insertChar("\u003E", textIndex, textarea);
  }
  return textIndez;
}
