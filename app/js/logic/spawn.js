import PlayerShot from "../classes/PlayerShot";

export default function spawn({ player, playerShots, enemies }, f) {
  if (player.isShooting && player.shotReady) spawnPlayerShots();

  function spawnPlayerShots() {
    player.shotReady = false;
    setTimeout(() => (player.shotReady = true), 500);
    playerShots.push(new PlayerShot({ x: player.x, y: player.y, turnAngle: player.turnAngle }));
  }
}
