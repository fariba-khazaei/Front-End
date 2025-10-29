let computerScore = 0;
let yourScore = 0;
const game = (chosenType) => {
  document.getElementById("reset").disabled = false;
  let result = "";
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === chosenType) {
    result = "EQUAL";
  } else if (
    (chosenType === 0 && computerChoice === 2) ||
    (chosenType === 1 && computerChoice === 0) ||
    (chosenType === 2 && computerChoice === 1)
  ) {
    result = "You've WON!!";
    yourScore += 1;
  } else {
    result = "You've LOST!!";
    computerScore += 1;
  }
  document.getElementById("result").innerText = " result: " + result;
  document.getElementById("score").innerText =
    "You : " + yourScore + ", Computer: " + computerScore;
};

const resetBtn = () => {
  document.getElementById("reset").disabled = true;
  document.getElementById("result").innerText = " result: ";
  document.getElementById("score").innerText = "You : 0, Computer: 0";
  computerScore = 0;
  yourScore = 0;
};
