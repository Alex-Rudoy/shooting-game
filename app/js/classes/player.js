import Entity from "./entity";
import images from "./images";

export default class Player extends Entity {
  constructor(...args) {
    super(...args);

    this.x = 800;
    this.y = 450;
    this.image = images.player;
    this.hitbox = 40;

    this.turnAngle = 0;

    this.maxSpeed = 2;
    this.speed = 0;

    this.moveAngle = 0;
    this.moveTop = false;
    this.moveLeft = false;
    this.moveBot = false;
    this.moveRight = false;

    this.controls();
    this.playerRotation();
  }

  playerRotation() {
    let canvas = document.querySelector(".game");

    canvas.onmousemove = (event) => {
      this.turnAngle = Math.atan2(
        ((event.clientY - canvas.offsetTop) / canvas.clientHeight) * canvas.height - this.y,
        ((event.clientX - canvas.offsetLeft) / canvas.clientWidth) * canvas.width - this.x
      );
    };
  }

  controls() {
    document.addEventListener("keydown", (e) => this.keyDownHandler(e));
    document.addEventListener("keyup", (e) => this.keyUpHandler(e));
  }

  keyDownHandler(event) {
    if (event.code == "KeyW") this.moveTop = true;
    if (event.code == "KeyA") this.moveLeft = true;
    if (event.code == "KeyS") this.moveBot = true;
    if (event.code == "KeyD") this.moveRight = true;
    this.recalculateMoveAngle();
  }

  keyUpHandler(event) {
    if (event.code == "KeyW") this.moveTop = false;
    if (event.code == "KeyA") this.moveLeft = false;
    if (event.code == "KeyS") this.moveBot = false;
    if (event.code == "KeyD") this.moveRight = false;
    this.recalculateMoveAngle();
  }

  recalculateMoveAngle() {
    if (this.moveTop || this.moveLeft || this.moveRight || this.moveBot) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = 0;
    }

    if (this.moveTop && !this.moveBot) {
      this.moveAngle = -Math.PI / 2 - (Math.PI / 4) * this.moveLeft + (Math.PI / 4) * this.moveRight;
    }

    if (this.moveBot && !this.moveTop) {
      this.moveAngle = Math.PI / 2 + (Math.PI / 4) * this.moveLeft - (Math.PI / 4) * this.moveRight;
    }

    if (this.moveTop == this.moveBot) {
      this.moveAngle = Math.PI * this.moveLeft + Math.PI * this.moveLeft * this.moveRight;
    }
  }
}
