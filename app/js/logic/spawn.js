import PlayerShot from "../classes/PlayerShot";

export default function spawn({ player, playerShots, enemies }, f) {
  if (player.isShooting && player.shotReady) spawnPlayerShots();
  console.log(player.isShooting, player.shotReady);

  function spawnPlayerShots() {
    player.shotReady = false;
    setTimeout(() => (player.shotReady = true), 500);
    playerShots.push(new PlayerShot({ x: player.x, y: player.y, turnAngle: player.turnAngle }));
  }
}
