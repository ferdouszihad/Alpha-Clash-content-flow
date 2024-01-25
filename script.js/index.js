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

  const myscreenKeys = document.getElementsByTagName("kbd");
  for (let keyBox of myscreenKeys) {
    if (randomAlphabet == keyBox.innerText) {
      keyBox.style.background = "orange";
    } else {
      keyBox.style.background = "#fefefe";
    }
  }
}
getRandomAphabet();

function restart() {
  hide("result");
  show("play-ground");
  hide("home");
  setElementText("score", 0);
  setElementText("life", 5);
}

document.addEventListener("keyup", function (e) {
  const myscreenKeys = document.getElementsByTagName("kbd");

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
    if (getElementNumber("life") == 0) {
      show("result");
      hide("play-ground");
      const score = getElementNumber("score");
      setElementText("result-box", score);
    }
  }
});

document.addEventListener("keydown", function (e) {
  const pressedButtonKey = e.key;
  const myscreenKeys = document.getElementsByTagName("kbd");
  for (let keyBox of myscreenKeys) {
    if (pressedButtonKey == keyBox.innerText) {
      keyBox.style.background = "tomato";
    }
  }
});

getElementById("restart-btn").addEventListener("click", function () {
  restart();
});
getElementById("start-btn").addEventListener("click", function () {
  restart();
});
