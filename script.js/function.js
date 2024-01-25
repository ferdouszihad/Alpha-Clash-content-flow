function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}

function getElementText(id) {
  const element = document.getElementById(id);
  const elementText = element.innerText;
  return elementText;
}
function getElementNumber(id) {
  const element = document.getElementById(id);
  const elementText = element.innerText;
  const elementNum = parseInt(elementText);
  return elementNum;
}

function setElementText(id, newValue) {
  const element = document.getElementById(id);
  element.innerText = newValue;
}

function show(id, displayValue) {
  const element = getElementById(id);
  element.classList.remove("hidden");
}
function hide(id) {
  const element = getElementById(id);
  element.classList.add("hidden");
}
