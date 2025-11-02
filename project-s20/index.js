const accounts = [
  { name: "Alice", balance: 1000, rate: 2 },
  { name: "Bob", balance: 1500, rate: 1.5 },
  { name: "Charlie", balance: 2000, rate: 1 },
];

let months = 0;
let totalInterest = 0;
const balanceInterval = setInterval(() => {
  console.log("Month" + (months + 1) + ":");
  totalInterest += accounts.reduce((acc, cur) => {
    let interest = (cur.balance * cur.rate) / 100;
    cur.balance += interest;
    console.log(cur.name + "'s balance is " + cur.balance);
    return acc + interest;
  }, 0);
  months += 1;
  if (months === 12) {
    clearInterval(balanceInterval);
    console.log("Total interest in a year: " + totalInterest);
  }
}, 1000);
