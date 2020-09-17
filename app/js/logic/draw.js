let canvas = document.querySelector(".game");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

export default function draw({ player }, f) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //test draw
  player.draw(player.image, player.x, player.y, player.turnAngle);
}
