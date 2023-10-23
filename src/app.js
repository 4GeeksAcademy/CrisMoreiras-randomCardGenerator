/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomCard();
};

const suits = ["♦", "♥", "♠", "♣"];
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 10, "J", "Q", "K"];

function randomCard() {
  let card = cards[Math.floor(Math.random() * cards.length)];

  let suit = suits[Math.floor(Math.random() * suits.length)];

  if (suit == "♦" || suit == "♥") {
    document.getElementById("randomSuit").style.color = "red";
    document.getElementById("randomCard").style.color = "red";
    document.getElementById("randomSuit2").style.color = "red";
  }

  document.getElementById("randomCard").innerHTML = card;
  document.getElementById("randomSuit").innerHTML = suit;
  document.getElementById("randomSuit2").innerHTML = suit;
}
