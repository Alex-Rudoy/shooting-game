import images from "../../dictionaries/images";
import Entity from "../base/Entity";

export default class EnemyShot extends Entity {
  constructor(args) {
    super(args);

    this.turnAngle = args.turnAngle;
    this.moveAngle = args.turnAngle;

    this.image = images.EnemyShot;
    this.hitbox = 10;

    this.speed = 7;
  }
}
