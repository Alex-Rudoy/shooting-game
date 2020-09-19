import { ctx } from "../../logic/draw";
import Entity from "../base/Entity";

export default class Enemy extends Entity {
  constructor(args) {
    super(args);

    this.maxHP = args.hp;
    this.HP = args.hp;
  }
}

Enemy.prototype.drawHPBar = function () {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "black";
  ctx.fillRect(this.x - 50, this.y - 70, 100, 10);
  ctx.fillStyle = "red";
  ctx.strokeRect(this.x - 50, this.y - 70, 100, 10);
  ctx.fillRect(this.x - 50, this.y - 70, (100 / this.maxHP) * this.HP, 10);
  for (let i = 1; i <= this.maxHP; i++) {
    ctx.fillRect(this.x - 50 + (100 / this.maxHP) * i, this.y - 70, 1, 10);
  }
};
