import Entity from "./Entity";

export default class Enemy extends Entity {
  constructor(args) {
    super(args);
  }
}

Enemy.prototype.getPlayerAngle = function (player) {
  return Math.atan2(player.y - this.y, player.x - this.x);
};
