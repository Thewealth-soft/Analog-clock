// Your JavaScript code here
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let container = document.querySelector(".container");
let clock = document.querySelector(".clock");
container.appendChild(clock);

// Creating numbers for the clock
for (let i = 1; i <= 12; i++) {
  let span = document.createElement("span");
  span.style = `--i: ${i}`;
  span.innerHTML = `<b style="color: black;">${i}</b>`;
  clock.appendChild(span);
}

function displayTime() {
  let date = new Date();

  // Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let rotateH = 30 * hh + mm / 2;
  let rotateM = 6 * mm;
  let rotateS = 6 * ss;

  hr.style.transform = `rotate(${rotateH}deg)`;
  min.style.transform = `rotate(${rotateM}deg)`;
  sec.style.transform = `rotate(${rotateS}deg)`;
}

displayTime(); // To Display time immediately
setInterval(displayTime, 1000); // To Update every second
