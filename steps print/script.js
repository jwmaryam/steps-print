let container = document.querySelector(`.container`);
let totalCircle = 10;
let anglestep = 360 / totalCircle;

for (let i = 0; i<totalCircle; i++) {
  let circle = document.createElement(`div`);
  circle.classList.add(`circle`);

  let rotation = i*anglestep;
  circle.style.transform = `rotate(${rotation}deg) translate(150px)`; 
  container.appendChild(circle);
}
