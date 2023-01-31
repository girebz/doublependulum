const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let t = 0;

const a = 100;
const b = 100;
const c = 75;
const d = 75;
const phaseDifference = Math.PI / 4;

function drawPendulum() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const x1 = a * Math.sin(t);
  const y1 = b * Math.cos(t);

  const x2 = c * Math.sin(t + phaseDifference);
  const y2 = d * Math.cos(t + phaseDifference);

  context.beginPath();
  context.arc(x1 + canvas.width / 10, canvas.height / 2 - y1, 10, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.arc(x2 + canvas.width / 10, canvas.height / 2 - y2, 10, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.moveTo(x1 + canvas.width / 10, canvas.height / 5 - y1);
  context.lineTo(x2 + canvas.width / 10, canvas.height / 5 - y2);
  context.stroke();

  t += 0.05;
  requestAnimationFrame(drawPendulum);
}

drawPendulum();
