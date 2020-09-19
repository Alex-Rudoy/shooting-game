import { ctx } from "../logic/draw";
import Entity from "./Entity";

export default class Enemy extends Entity {
  constructor(args) {
    super(args);
  }
}

Enemy.prototype.drawHPBar = function () {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.strokeRect(this.x - 50, this.y - 70, 100, 10);
  ctx.fillRect(this.x - 50, this.y - 70, (100 / this.maxHP) * this.HP, 10);
};
