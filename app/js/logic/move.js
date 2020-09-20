import Boss from "../classes/enemies/Boss";

export default function move(gameState, f) {
  let { player, playerShots, enemies } = gameState;
  player.move(player.moveAngle, player.speed * f);

  playerShots.forEach((shot) => {
    shot.move(shot.moveAngle, shot.speed * f);

    // collision of shots with enemies
    enemies.forEach((enemy) => {
      if (shot.collideWith(enemy)) {
        shot.toDestroy = true;
        enemy.takeDamage();
      }
    });
  });

  // remove destroyed player shots
  gameState.playerShots = playerShots.filter(
    (shot) => shot.x > -50 && shot.x < 1650 && shot.y > -50 && shot.y < 950 && !shot.toDestroy
  );

  enemies.forEach((enemy) => {
    if (enemy.state != "followMotherShip") {
      // regular logic
      enemy.decision(player);
    } else {
      // MotherShipPets logic
      enemy.decision(enemies[0]);
    }
    enemy.move(enemy.moveAngle, enemy.speed * f);

    // collision of enemies with other enemies
    if (!enemy.noCollision) {
      enemies.forEach((enemy2) => {
        if (!enemy2.noCollision && enemy.collideWith(enemy2)) {
          let [angle, distance] = enemy.getEntityPosition(enemy2);
          enemy.move(angle, (distance - enemy.hitbox - enemy2.hitbox) / 2);
          enemy2.move(angle + Math.PI, (distance - enemy.hitbox - enemy2.hitbox) / 2);
        }
      });
    }

    // collision of enemies with player
    if (enemy.collideWith(player)) {
      let [angle, distance] = enemy.getEntityPosition(player);
      enemy.move(angle, (distance - enemy.hitbox - player.hitbox) / 2);
      player.move(angle + Math.PI, (distance - enemy.hitbox - player.hitbox) / 2);

      if (!player.immune) {
        player.takeDamage();
        enemy.takeDamage();
      }
    }
  });

  // remove dead enemies from game
  gameState.enemies = enemies.filter((enemy) => {
    if (!enemy.toDestroy) return true;
    if (enemy instanceof Boss) {
      gameState.victory();
    }
    enemy.x = -100;
    enemy.y = -100;
    return false;
  });
}
