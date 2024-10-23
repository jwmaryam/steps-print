const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

let prevSeconds = 0;

function updateClock() {
  const day = new Date();

  const milliseconds = day.getMilliseconds();
  const seconds = day.getSeconds() + milliseconds / 1000;
  const minutes = day.getMinutes() + seconds / 60;
  const hours = day.getHours() + minutes / 60;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg = ((hours % 12) / 12) * 360;

  // Only apply the transition when there's a jump backward in seconds
  if (seconds < prevSeconds) {
    sec.style.transition = "none";
  } else {
    sec.style.transition = "transform 0.05s linear";
  }

  sec.style.transform = `rotateZ(${secondDeg}deg)`;
  min.style.transform = `rotateZ(${minuteDeg}deg)`;
  hr.style.transform = `rotateZ(${hourDeg}deg)`;

  prevSeconds = seconds;

  requestAnimationFrame(updateClock);
}

updateClock();