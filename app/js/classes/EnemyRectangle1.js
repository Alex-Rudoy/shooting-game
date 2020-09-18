import images from "../logic/images";
import Enemy from "./Enemy";

export default class EnemyRectangle1 extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.EnemyRectangle1;

    this.hitbox = 20;
    this.speed = 1.5;

    this.maxHP = 1;
    this.HP = 1;
  }
}

EnemyRectangle1.prototype.decision = function (player) {
  let [playerAngle, playerDistance] = this.getEntityPosition(player);
  this.turnAngle = playerAngle;
  this.moveAngle = playerAngle;
};
