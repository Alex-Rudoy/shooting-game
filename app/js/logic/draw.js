let canvas = document.querySelector("canvas");
/** @type {CanvasRenderingContext2D} */
export let ctx = canvas.getContext("2d");

export default function draw(gameState, f) {
  let { player, playerShots, enemies } = gameState;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  playerShots.forEach((shot) => shot.draw());

  player.draw(player.image, player.x, player.y, player.turnAngle);

  enemies.forEach((enemy) => enemy.draw());

  player.drawHPBar();

  enemies.forEach((enemy) => enemy.drawHPBar());
}
