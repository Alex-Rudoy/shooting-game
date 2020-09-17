import images from "../logic/images";
import Enemy from "./Enemy";

export default class EnemyRectangle1 extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.EnemyRectangle1;

    this.hitbox = 20;
    this.turnAngle = 0;
    this.speed = 2;

    this.maxhp = 2;
    this.hp = 2;
  }
}

EnemyRectangle1.prototype.decision = function (player) {
  let [playerDistance, playerAngle] = this.getPlayerPosition(player);
  this.turnAngle = playerAngle;
};
