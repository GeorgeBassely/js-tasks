// task 1
document.write("hello world");

// // task 2
function leapYear(year) {
  let i = 0;
  if ((i == year % 4 && i != year % 100) || i == year % 400) {
    console.log(year + "leap year");
  } else {
    console.log(year + "not leap year");
  }
}
let year = prompt("enter year");
leapYear(year);

// task 3
function divi(num) {
  return num % 5 === 0;
}
console.log(divi(+prompt("enter the number")));

//task 4

function getRandomNum(){
  const numRandom = Math.random();
  const max = 1000;
  const min = 100;
  const mathRandom = (numRandom * (max - min + 1) + min);
  const mathFloor = Math.floor(mathRandom);
  const inpt = document.querySelector('#inpt');
  inpt.value = mathFloor;
}

// function btn() {
//   const btn = document.querySelector("#random-btn");
//   btn.addEventListener("click", getRandomNum);
// }
// btn();

