console.log("Welcom to tic-tac-toe");
let music = new Audio("assets/sound/music.mp3");
let turnMusic = new Audio("assets/sound/ting.mp3");
let gameover = new Audio("assets/sound/gameover.mp3");
let winstatus = false;

let turn = "X";

changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

checkWin = () => {
  let boxtext = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 5, 90],
    [1, 4, 7, 5, 5, 90],
    [2, 5, 8, 15, 5, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      winstatus = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".box-text");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!winstatus) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".box-text");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  winstatus = false;
  if (!winstatus) {
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document
      .querySelector(".imgbox")
      .getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".line").style.width = "0";
  }
});
