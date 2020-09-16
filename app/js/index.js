import "../scss/main.scss";

let canvas = document.querySelector(".game");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

function draw(time) {
  requestAnimationFrame(draw);
}
draw();
