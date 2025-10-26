const suits = ["SPADE", "HEART", "DIAMOND", "CLUB"];
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const deck = [];
for (let suit of suits) {
  for (let card of cards) {
    deck.push([suit, card]);
  }
}
// console.log(deck)

const changeOrder = (arry) => {
  for (let i = arry.length - 1; i > arry.length / 2; i--) {
    let changeIndex = 0;
    changeIndex = Math.floor(Math.random() * i);
    let changeItem = arry[i];
    arry[i] = arry[changeIndex];
    arry[changeIndex] = changeItem;
  }
  return arry;
};

// version 2
const changeOrder2 = (arry) => {
  arry.forEach((card, i) => {
    console.log(i);
    let changeIndex = 0;
    changeIndex = Math.floor(Math.random() * i);
    let changeItem = card;
    arry[i] = arry[changeIndex];
    arry[changeIndex] = changeItem;
  });
  return arry;
};

const finalCards = (cardsDeck) => {
  const newCards = [[], [], [], []];
  const allCards = changeOrder([...cardsDeck]);
  allCards.forEach((card, i) => {
    newCards[i % 4].push(card);
  });
  return newCards;
};

console.log(finalCards(deck));
