import PlayerShot from "../classes/PlayerShot";
import levels from "./levels";

export default function spawn(entities, time) {
  let { player, playerShots, enemies } = entities;

  // player shot spawn
  if (player.isShooting && player.shotReady) {
    player.shotReady = false;
    setTimeout(() => (player.shotReady = true), 500);
    playerShots.push(new PlayerShot({ x: player.x, y: player.y, turnAngle: player.turnAngle }));
  }

  // enemy spawn
  if (levels[0].length > 0 && levels[0][levels[0].length - 1].time < time) {
    entities.enemies.push(levels[0].pop().enemy);
  }
}
