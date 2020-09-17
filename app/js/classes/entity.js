export default class Entity {
  constructor(args) {
    this.x = args.x || 0;
    this.y = args.y || 0;
    this.toDestroy = false;
  }
}

Entity.prototype.move = function (angle, distance) {
  this.x += Math.cos(angle) * distance;
  this.y += Math.sin(angle) * distance;
};

/** @type {CanvasRenderingContext2D} */
let ctx = document.querySelector(".game").getContext("2d");

Entity.prototype.draw = function () {
  ctx.setTransform(1, 0, 0, 1, this.x, this.y); // set position of image center
  ctx.rotate(this.turnAngle); // rotate
  ctx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2); // draw image offset so its center is at x,y
  ctx.setTransform(1, 0, 0, 1, 0, 0); // restore default transform
};

Entity.prototype.collisionDetection = function (obj) {
  if (Math.sqrt((this.x - obj.x) ** 2 + (this.y - obj.y) ** 2) < this.hitbox + obj.hitbox) {
    return true;
  }
  return false;
};
