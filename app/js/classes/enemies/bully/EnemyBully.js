import images from "../../../dictionaries/images";
import Enemy from "../Enemy";

export default class EnemyCrawler extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.EnemyBully;

    this.hitbox = 35;
    this.maxSpeed = 1;
    this.speed = 1;
  }
}

EnemyCrawler.prototype.decision = function (player) {
  let [playerAngle, playerDistance] = this.getEntityPosition(player);
  this.turnAngle = playerAngle;
  this.moveAngle = playerAngle;
};
