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

    this.maxSpeed = 2;
    this.speed = 0;

    this.moveAngle = 0;
    this.moveTop = false;
    this.moveLeft = false;
    this.moveBot = false;
    this.moveRight = false;
  }
}
