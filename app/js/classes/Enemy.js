import Entity from "./Entity";

export default class Enemy extends Entity {
  constructor(args) {
    super(args);
  }
}

Enemy.prototype.getPlayerPosition = function (player) {
  return [
    Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2),
    Math.atan2(player.y - this.y, player.x - this.x),
  ];
};
