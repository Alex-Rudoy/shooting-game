import images from "../../../dictionaries/images";
import Boss from "../Boss";

export default class MotherShip extends Boss {
  constructor(args) {
    super(args);

    this.image = images.MotherShip;

    this.hitbox = 100;
    this.maxSpeed = 0.7;
    this.speed = 0.7;
    this.noCollision = true;
  }
}

MotherShip.prototype.decision = function (player) {
  let [playerAngle, playerDistance] = this.getEntityPosition(player);
  this.turnAngle = playerAngle;
  this.moveAngle = playerAngle;
};
