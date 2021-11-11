let container = document.getElementById("container")

let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let fourth = document.getElementById("fourth")

let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let player3 = document.getElementById("player3")
let player4 = document.getElementById("player4")

// First

first.addEventListener('mouseenter', () => {
  player1.play();
})

first.addEventListener('mouseleave', () => {
  player1.pause();
})

player1.addEventListener('pause', () => {
  first.style.backgroundColor = "white";
  first.style.borderRadius = "0px";
})

player1.addEventListener('play', () => {
  first.style.backgroundColor = "#3B7460";
  first.style.borderRadius = "30px";
  console.log("YUh");
})

//Second

second.addEventListener('mouseenter', () => {
  player2.play();
})

second.addEventListener('mouseleave', () => {
  player2.pause();
})

player2.addEventListener('pause', () => {
  second.style.backgroundColor = "white";
  second.style.borderRadius = "0px";
})

player2.addEventListener('play', () => {
  second.style.backgroundColor = "#02055A";
  second.style.borderRadius = "30px";
})

//Third

third.addEventListener('mouseenter', () => {
  player3.play();
})

third.addEventListener('mouseleave', () => {
  player3.pause();
})

player3.addEventListener('pause', () => {
  third.style.backgroundColor = "white";
  third.style.borderRadius = "0px";
})

player3.addEventListener('play', () => {
  third.style.backgroundColor = "#E1AD01";
  third.style.borderRadius = "30px";
})

//Fourth

fourth.addEventListener('mouseenter', () => {
  player4.play();
})

fourth.addEventListener('mouseleave', () => {
  player4.pause();
})

player4.addEventListener('pause', () => {
  fourth.style.backgroundColor = "white";
  fourth.style.borderRadius = "0px";
})

player4.addEventListener('play', () => {
  fourth.style.backgroundColor = "#412227";
  fourth.style.borderRadius = "30px";
})
