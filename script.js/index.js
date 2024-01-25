console.log("connected");
const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
const arrayOfAllAlphabets = allAlphabets.split("");
console.log(arrayOfAllAlphabets);

function getRandomAphabet() {
  let randomNum = Math.random() * 26; // a floating number will generated
  randomNum = parseInt(randomNum);
  const randomAlphabet = arrayOfAllAlphabets[randomNum]; // getting a randomAlphabet
  console.log(randomAlphabet);
  const alphabetBox = document.getElementById("current-alphabet"); //getting the alphabet element from html
  alphabetBox.innerHTML = randomAlphabet;
}
getRandomAphabet();

document.addEventListener("keyup", function (e) {
  const pressedButtonKey = e.key;
  console.log(pressedButtonKey);
  const alphabetBox = document.getElementById("current-alphabet"); //getting the alphabet element
  const currentAlphabet = alphabetBox.innerText;
  if (currentAlphabet == pressedButtonKey) {
    const scoreBox = document.getElementById("score");
    const scoreCountText = scoreBox.innerText;
    let scoreCountNum = parseInt(scoreCountText);
    console.log(scoreCountNum);
    scoreBox.innerText = scoreCountNum + 1;
    getRandomAphabet();
  } else {
    const lifeBox = document.getElementById("life");
    const lifeCountText = lifeBox.innerText;
    let lifeCountNum = parseInt(lifeCountText);
    console.log(lifeCountNum);
    lifeBox.innerText = lifeCountNum - 1;
  }
});
