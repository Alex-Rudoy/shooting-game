import { ctx } from "../logic/draw";
import Entity from "./Entity";

export default class Enemy extends Entity {
  constructor(args) {
    super(args);
  }
}

Enemy.prototype.getPlayerPosition = function (player) {
  return [
    Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2),
    Math.atan2(player.y - this.y, player.x - this.x),
  ];
};

Enemy.prototype.drawHPBar = function () {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.strokeRect(this.x - 50, this.y - 70, 100, 10);
  ctx.fillRect(this.x - 50, this.y - 70, (100 / this.maxHP) * this.HP, 10);
  for (let i = 0; i < this.maxHP; i++) {}
};
