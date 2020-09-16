import Player from "../classes/player";

let canvas = document.querySelector(".game");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

let player = new Player();

canvas.onmousemove = function (event) {
  player.angle = Math.atan2(
    ((event.clientY - canvas.offsetTop) / canvas.clientHeight) * canvas.height - player.y,
    ((event.clientX - canvas.offsetLeft) / canvas.clientWidth) * canvas.width - player.x
  );
  console.log(player.image.width, player.image.height);
};

export default function draw(f) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //test draw
  drawImageRotated(player.image, player.x, player.y, player.angle);
}

function drawImageRotated(img, x, y, angle) {
  ctx.setTransform(1, 0, 0, 1, x, y); // set position of image center
  ctx.rotate(angle); // rotate
  ctx.drawImage(img, -img.width / 2, -img.height / 2); // draw image offset so its center is at x,y
  ctx.setTransform(1, 0, 0, 1, 0, 0); // restore default transform
}
