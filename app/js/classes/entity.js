export default class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

Entity.prototype.move = function (angle, distance) {
  this.x += Math.cos(angle) * distance;
  this.y += Math.sin(angle) * distance;
};

/** @type {CanvasRenderingContext2D} */
let ctx = document.querySelector(".game").getContext("2d");

Entity.prototype.draw = function (img, x, y, angle) {
  ctx.setTransform(1, 0, 0, 1, x, y); // set position of image center
  ctx.rotate(angle); // rotate
  ctx.drawImage(img, -img.width / 2, -img.height / 2); // draw image offset so its center is at x,y
  ctx.setTransform(1, 0, 0, 1, 0, 0); // restore default transform
};
