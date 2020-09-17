import PlayerShot from "../classes/PlayerShot";

export default function spawn({ player, playerShots, enemies }, f) {
  if (player.shooting && player.shotReady) spawnPlayerShots();

  function spawnPlayerShots() {
    player.shotReady = false;
    setTimeout(() => (player.shotReady = true), 500);
    playerShots.push(new PlayerShot(player.x, player.y));
  }
}
