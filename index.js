const myBd = new Date("1 mar, 2024 00:00:00");
const bYear = myBd.getFullYear();
const bMonth = myBd.getMonth();
const bDay = myBd.getDate();
const bHour = myBd.getHours();
const bMinutes = myBd.getMinutes();
const bSeconds = myBd.getSeconds();

let pDays = document.getElementById("days");
let pHours = document.getElementById("hours");
let pMinutes = document.getElementById("minutes");
let pSeconds = document.getElementById("seconds");

const display = () => {
  const now = new Date();
  let darchenili = myBd - now;
  let dgeebi = Math.floor(darchenili / (24 * 60 * 60 * 1000));
  let nashti = darchenili % (24 * 60 * 60 * 1000);
  let saati = Math.floor(nashti / (60 * 60 * 1000));
  let nashti2 = nashti % (60 * 60 * 1000);
  let minutes = Math.floor(nashti2 / (60 * 1000));
  let nashti3 = nashti2 % (60 * 1000);
  let seconds = Math.floor(nashti3 / 1000);

  pDays.innerHTML = `${dgeebi}`;
  pHours.innerHTML = `${saati}`;
  pMinutes.innerHTML = `${minutes}`;
  pSeconds.innerHTML = `${seconds}`;
  console.log(pDays.innerHTML);
};

display();

setInterval(() => {
  display();
  if (dgeebi === 0 && saati === 0 && minutes === 0 && seconds === 0) {
    clearInterval();
  }
}, 1000);
