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

    this.state = "followBoss";

    setTimeout(() => {
      this.state = "attack";
      this.noCollision = false;
    }, 9000 + Math.random() * 3000);
  }
}

MotherShipPet.prototype.decision = function (target) {
  if (this.state == "followBoss") {
    // target = MotherShip
    let [angle, distance] = this.getEntityPosition(target);
    this.turnAngle = angle + (Math.PI / 2 + (1 - distance / 250) * Math.PI) * this.rotation;
  }

  if (this.state == "attack") {
    // target = player
    let [angle, distance] = this.getEntityPosition(target);
    console.log(this.turnAngle, angle);

    //min angle between 0 and +2pi
    if (angle < this.turnAngle) {
      if (this.turnAngle - angle > 2 * Math.PI + angle - this.turnAngle) this.turnAngle += Math.PI / 100;
      else this.turnAngle -= Math.PI / 100;
    } else {
      if (angle - this.turnAngle < 2 * Math.PI + this.turnAngle - angle) this.turnAngle += Math.PI / 100;
      else this.turnAngle -= Math.PI / 100;
    }
    if (this.turnAngle < -Math.PI) this.turnAngle += Math.PI * 2;
    if (this.turnAngle > Math.PI) this.turnAngle -= Math.PI * 2;
  }

  this.moveAngle = this.turnAngle;
};

MotherShipPet.prototype.drawHPBar = function () {
  return;
};
