import PlayerShot from "../classes/PlayerShot";

export default function spawn(gameState) {
  let { player, playerShots, enemies, waveTime, waveEnemies } = gameState;

  // player shot spawn
  if (player.isShooting && player.shotReady) {
    player.shotReady = false;
    setTimeout(() => (player.shotReady = true), 500);
    playerShots.push(new PlayerShot({ x: player.x, y: player.y, turnAngle: player.turnAngle }));
  }

  // enemy spawn
  if (waveEnemies.length > 0 && waveEnemies[waveEnemies.length - 1].time <= gameState.waveTime) {
    gameState.enemies.push(waveEnemies.pop().enemy);
  }
}
