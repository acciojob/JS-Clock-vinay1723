const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();

  // SECOND HAND
  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // MINUTE HAND (⚠️ NO seconds added - important for Cypress test)
  const minsDegrees = mins * 6 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  // HOUR HAND
  const hourDegrees = (hour % 12) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
