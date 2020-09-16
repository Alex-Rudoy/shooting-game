import "../scss/main.scss";
import images from "./classes/images";

let canvas = document.querySelector(".game");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

let f = 0;
let prevTime = 0;

function draw(time) {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  f = time - prevTime;
  prevTime = time;

  ctx.drawImage(images.player, 100, 100);
}

draw();
