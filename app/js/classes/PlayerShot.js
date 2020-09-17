import images from "../logic/images";
import Entity from "./Entity";

export default class PlayerShot extends Entity {
  constructor(...args) {
    super(...args);

    this.image = images.playerShot;
    this.hitbox = 10;

    this.moveAngle = this.moveAngle;

    this.speed = 10;
  }
}
