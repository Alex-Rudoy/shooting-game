import images from "../logic/images";
import Enemy from "./Enemy";

export default class EnemyCircle1 extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.EnemyCircle1;

    this.hitbox = 20;
    this.turnAngle = 0;
    this.speed = 2;
  }
}
