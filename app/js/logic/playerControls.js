export default function playerControls(player) {
  let canvas = document.querySelector(".game");

  // player rotation
  canvas.onmousemove = (event) => {
    player.turnAngle = Math.atan2(
      ((event.clientY - canvas.offsetTop) / canvas.clientHeight) * canvas.height - player.y,
      ((event.clientX - canvas.offsetLeft) / canvas.clientWidth) * canvas.width - player.x
    );
  };

  // player shooting
  canvas.addEventListener("mousedown", () => (player.isShooting = true));
  canvas.addEventListener("mouseup", () => (player.isShooting = false));

  // player movement
  document.addEventListener("keydown", (e) => keyDownHandler(e));
  document.addEventListener("keyup", (e) => keyUpHandler(e));

  function keyDownHandler(e) {
    if (e.code == "KeyW") player.moveTop = true;
    if (e.code == "KeyA") player.moveLeft = true;
    if (e.code == "KeyS") player.moveBot = true;
    if (e.code == "KeyD") player.moveRight = true;
    recalculateMoveAngle();
  }

  function keyUpHandler(e) {
    if (e.code == "KeyW") player.moveTop = false;
    if (e.code == "KeyA") player.moveLeft = false;
    if (e.code == "KeyS") player.moveBot = false;
    if (e.code == "KeyD") player.moveRight = false;
    recalculateMoveAngle();
  }

  function recalculateMoveAngle() {
    if (player.moveTop || player.moveLeft || player.moveRight || player.moveBot) {
      player.speed = player.maxSpeed;
    } else {
      player.speed = 0;
    }

    if (player.moveTop && !player.moveBot) {
      player.moveAngle = -Math.PI / 2 - (Math.PI / 4) * player.moveLeft + (Math.PI / 4) * player.moveRight;
    }

    if (player.moveBot && !player.moveTop) {
      player.moveAngle = Math.PI / 2 + (Math.PI / 4) * player.moveLeft - (Math.PI / 4) * player.moveRight;
    }

    if (player.moveTop == player.moveBot) {
      player.moveAngle = Math.PI * player.moveLeft + Math.PI * player.moveLeft * player.moveRight;
    }
  }
}
