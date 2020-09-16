import Entity from "./entity";
import images from "./images";

export default class Player extends Entity {
  constructor(...args) {
    super(...args);
    this.x = 800;
    this.y = 450;
    this.image = images.player;
    this.hitbox = 40;
    this.angle = 0;
  }
}
