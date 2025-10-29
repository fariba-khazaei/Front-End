let myScore = 0;
let lastHand = 0;
const play = (hand) => {
  let result = "";
  document.getElementsByTagName("button")[lastHand].style.color = "black";
  lastHand = hand;
  const correctHand = Math.floor(Math.random() * 10);
  lastHand = correctHand;
  console.log(correctHand);
  console.log(hand);
  if (hand == correctHand) {
    myScore += 1;
    result = "You've WON!!!";
  } else {
    result = "You've LOST!!!";
  }
  document.getElementsByTagName("button")[correctHand].style.color = "red";
  document.getElementById("result").innerText = "result : " + result;
  document.getElementById("score").innerText = "your score: " + myScore;
};
