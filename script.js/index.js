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
