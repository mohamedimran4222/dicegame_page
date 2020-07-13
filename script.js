function game() {
  var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
  var RandomSource1 = "images/dice" + RandomNumber1 + ".png";
  document.querySelector(".image1").setAttribute("src", RandomSource1);
  var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
  var RandomSource2 = "images/dice" + RandomNumber2 + ".png";
  document.querySelector(".image2").setAttribute("src", RandomSource2);
  if (RandomNumber1 > RandomNumber2) {
    document.querySelector("h1").innerHTML = "Player1Wins";
  } else if (RandomNumber2 > RandomNumber1) {
    document.querySelector("h1").innerHTML = "Player2Wins";
  } else {
    document.querySelector("h1").innerHTML = "Its a Tie";
  }
}
