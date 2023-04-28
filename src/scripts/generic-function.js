export function insertChar(newChar, textIndex, textarea) {
  let textIndez = textIndex;
  const textarez = textarea;
  textarez.value = (textarea.value.slice(0, textIndex) + newChar + textarea.value.slice(textIndex));
  textIndez += 1;
  textarez.selectionStart = textIndex;
  textarez.selectionEnd = textIndex;
  return textIndez;
}

export function deleteChar(choise, textIndex, textarea) {
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
