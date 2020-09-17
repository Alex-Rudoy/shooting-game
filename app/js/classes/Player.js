import images from "../logic/images";
import Entity from "./Entity";

export default class Player extends Entity {
  constructor(args) {
    super(args);

    this.x = 800;
    this.y = 450;
    this.image = images.player;
    this.hitbox = 20;

    this.turnAngle = 0;
    this.isShooting = false;
    this.shotReady = true;

    this.maxSpeed = 4;
    this.speed = 0;

    this.moveAngle = 0;
    this.moveTop = false;
    this.moveLeft = false;
    this.moveBot = false;
    this.moveRight = false;
  }

  move(angle, distance) {
    super.move(angle, distance);
    if (this.x < 40) this.x = 40;
    if (this.x > 1560) this.x = 1560;
    if (this.y < 40) this.y = 40;
    if (this.y > 860) this.y = 860;
  }
}
