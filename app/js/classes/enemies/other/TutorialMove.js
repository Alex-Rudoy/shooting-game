import { ctx } from "../../../logic/draw";
import Enemy from "../Enemy";

export default class TutorialMove extends Enemy {
  constructor(args) {
    super(args);

    this.hitbox = 10;
    this.moveAngle = 0;
    this.turnAngle = 0;
    this.speed = 0;

    this.maxHP = 1;
    this.HP = 1;

    this.radius = 40;
    this.increase = true;
  }
}

TutorialMove.prototype.draw = function () {
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 1;
};

TutorialMove.prototype.decision = function (player) {
  if (this.radius > 45) {
    this.increase = false;
  }
  if (this.radius < 35) {
    this.increase = true;
  }
  this.radius += this.increase * 0.2 + !this.increase * -0.2;
};

TutorialMove.prototype.drawHPBar = function () {
  Enemy.prototype.drawHPBar();
};
