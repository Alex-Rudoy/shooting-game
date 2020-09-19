import Enemy from "./Enemy";

export default class Boss extends Enemy {
  constructor(args) {
    super(args);
  }
}

Boss.prototype.drawHPBar = function () {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "black";
  ctx.fillRect(this.x - 100, this.y - 100, 200, 20);
  ctx.fillStyle = "red";
  ctx.strokeRect(this.x - 100, this.y - 100, 200, 20);
  ctx.fillRect(this.x - 100, this.y - 100, (200 / this.maxHP) * this.HP, 20);
  for (let i = 1; i <= this.maxHP; i++) {
    ctx.fillRect(this.x - 10 + (200 / this.maxHP) * i, this.y - 100, 1, 20);
  }
};
