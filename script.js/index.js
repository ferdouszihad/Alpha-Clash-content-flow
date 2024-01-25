console.log("connected");
const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
const arrayOfAllAlphabets = allAlphabets.split("");
console.log(arrayOfAllAlphabets);

function getRandomAphabet() {
  let randomNum = Math.random() * 26; // a floating number will generated
  randomNum = parseInt(randomNum);
  const randomAlphabet = arrayOfAllAlphabets[randomNum]; // getting a randomAlphabet
  console.log(randomAlphabet);
  setElementText("current-alphabet", randomAlphabet);
}
getRandomAphabet();

document.addEventListener("keyup", function (e) {
  const myscreenKeys = document.getElementsByTagName("kbd");
  for (let keyBox of myscreenKeys) {
    keyBox.style.background = "#fefefe";
  }

  const pressedButtonKey = e.key;
  //   console.log(pressedButtonKey);
  const currentAlphabet = getElementText("current-alphabet");

  if (currentAlphabet == pressedButtonKey) {
    let scoreCountNum = getElementNumber("score");
    setElementText("score", scoreCountNum + 1);

    getRandomAphabet();
  } else {
    let lifeCountNum = getElementNumber("life");
    setElementText("life", lifeCountNum - 1);
  }
});

document.addEventListener("keydown", function (e) {
  const pressedButtonKey = e.key;
  const myscreenKeys = document.getElementsByTagName("kbd");
  for (let keyBox of myscreenKeys) {
    if (pressedButtonKey == keyBox.innerText) {
      keyBox.style.background = "#4cd389";
    } else {
      keyBox.style.background = "#fefefe";
    }
  }
});
