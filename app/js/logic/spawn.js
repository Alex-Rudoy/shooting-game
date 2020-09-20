import MotherShipPet from "../classes/enemies/boss/MotherShipPet";
import PlayerShot from "../classes/friendly/PlayerShot";

export default function spawn(gameState) {
  let { player, playerShots, enemies, waveTime, waveEnemies } = gameState;

  // player shot spawn
  if (player.isShooting && player.shotReady && !(!gameState.lvl && !gameState.wave)) {
    player.shotReady = false;
    setTimeout(() => (player.shotReady = true), 500);
    playerShots.push(new PlayerShot({ x: player.x, y: player.y, turnAngle: player.turnAngle }));
  }

  // enemy spawn
  if (waveEnemies.length > 0 && waveEnemies[waveEnemies.length - 1].time <= gameState.waveTime) {
    let enemy = waveEnemies.pop();

    if (enemy.enemyClass != MotherShipPet) {
      // regular logic
      gameState.enemies.push(new enemy.enemyClass({ x: enemy.x, y: enemy.y, hp: enemy.hp }));
    } else {
      // MotherShipPets logic
      gameState.enemies.push(
        new enemy.enemyClass({ x: enemies[0].x, y: enemies[0].y - 120, hp: 1, rotation: enemy.rotation })
      );
    }
  }
}
