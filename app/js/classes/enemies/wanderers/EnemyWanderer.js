import images from "../../../dictionaries/images";
import Enemy from "../Enemy";

export default class EnemyWanderer extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.EnemyWanderer;

    this.hitbox = 20;
    this.maxSpeed = 4;
    this.speed = 4;

    this.state = "chooseDirection";
  }
}

EnemyWanderer.prototype.decision = function (player) {
  let [playerAngle, playerDistance] = this.getEntityPosition(player);
  if (this.state == "chooseDirection") {
    this.moveAngle = playerAngle - Math.PI / 3 + (Math.random() * Math.PI * 2) / 3;
    this.turnAngle = playerAngle;
    this.state = "move";

    setTimeout(() => {
      this.state = "wait";
      this.speed = 0;

      setTimeout(() => {
        this.state = "chooseDirection";
        this.speed = this.maxSpeed;
      }, 500);
    }, 1000);
  }
};
