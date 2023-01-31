const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let t = 0;

const a = 100;
const b = 100;
const c = 75;
const d = 75;
const g=9,81;
const omega1=0;
const phi1=0;
const L1=5;
const omega2=0;
const phi2=0;
const L2=5;
const h=0,00001;

const phaseDifference = Math.PI / 4;

/* La ecuación del péndulo es de la forma:
\dfrac{d^2 \theta}{dt^2} = -\dfrac{g}{l}\sin(\theta)*/

/*Derivada temporal:
\dfrac{d\theta}{dt} = \lim_{\Delta_t \to 0} \dfrac{\theta(t + \Delta_t) - \theta(t)}{\Delta_t}
*/

function diff(func, x, h) {
  return (func(x + h) - func(x)) / h;
}

function theta(t, omega, phi) {
  return
}


function drawPendulum() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const x1 = L1 * (L1*diff(diff(theta(t, omega1, phi1)t,h),t,h)/g);
  const y1 = L1 * Math.sqrt(1-(L1*diff(diff(theta(t, omega1, phi1)t,h),t,h)/g)^2);

  const x2 = x1+L2*(L2*diff(diff(theta(t, omega2, phi2)t,h),t,h)/g);
  const y2 = y1 + Math.sqrt(1-(L2*diff(diff(theta(t, omega2, phi2)t,h),t,h)/g)^2);

  context.beginPath();
  context.arc(x1 + canvas.width / 20, canvas.height / 2 - y1, 10, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.arc(x2 + canvas.width / 20, canvas.height / 2 - y2, 10, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.moveTo(x1 + canvas.width / 20, canvas.height / 5 - y1);
  context.lineTo(x2 + canvas.width / 20, canvas.height / 5 - y2);
  context.stroke();

  t += 0.05;
  requestAnimationFrame(drawPendulum);
}

drawPendulum();
