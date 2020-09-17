import images from "../logic/images";
import Enemy from "./Enemy";

export default class EnemyCircle1 extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.EnemyCircle1;

    this.hitbox = 20;
    this.turnAngle = 0;
    this.maxSpeed = 3;
    this.speed = 3;

    this.maxHP = 1;
    this.HP = 1;

    this.state = "chooseDirection";
  }
}

EnemyCircle1.prototype.decision = function (player) {
  let [playerDistance, playerAngle] = this.getPlayerPosition(player);
  if (this.state == "chooseDirection") {
    this.turnAngle = playerAngle - Math.PI / 3 + (Math.random() * Math.PI * 2) / 3;
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
