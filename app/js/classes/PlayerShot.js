import images from "../logic/images";
import Entity from "./Entity";

export default class PlayerShot extends Entity {
  constructor(args) {
    super(args);

    this.turnAngle = args.turnAngle;
    this.moveAngle = args.turnAngle;

    this.image = images.playerShot;
    this.hitbox = 10;

    this.speed = 10;
  }
}
