import images from "../../../dictionaries/images";
import Enemy from "../Enemy";

export default class MotherShipPet extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.MotherShipPet;

    this.hitbox = 15;
    this.maxSpeed = 4;
    this.speed = 4;
    this.rotation = args.rotation;
    this.noCollision = true;

    this.state = "followMotherShip";

    setTimeout(() => {
      this.state = "attack";
      this.noCollision = false;
    }, 9000 + Math.random() * 3000);
  }
}

MotherShipPet.prototype.decision = function (target) {
  if (this.state == "followMotherShip") {
    // target = MotherShip
    let [angle, distance] = this.getEntityPosition(target);
    this.turnAngle = angle + (Math.PI / 2 + (1 - distance / 250) * Math.PI) * this.rotation;
    this.moveAngle = this.turnAngle;
  }
  if (this.state == "attack") {
    // target = player
    let [angle, distance] = this.getEntityPosition(target);

    if (angle < 0 && this.rotation == -1) angle += Math.PI * 2;
    if (angle > 0 && this.rotation == 1) angle -= Math.PI * 2;

    if (this.turnAngle < angle) this.turnAngle += Math.PI / 100;
    else this.turnAngle -= Math.PI / 100;
    this.moveAngle = this.turnAngle;
  }
};

Enemy.prototype.drawHPBar = function () {
  return;
};
