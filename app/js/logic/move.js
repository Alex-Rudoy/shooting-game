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
    enemy.decision(player);
    enemy.move(enemy.moveAngle, enemy.speed * f);

    // collision of enemies with other enemies
    enemies.forEach((enemy2) => {
      if (enemy.collideWith(enemy2)) {
        let [angle, distance] = enemy.getEntityPosition(enemy2);
        enemy.move(angle, (distance - enemy.hitbox - enemy2.hitbox) / 2);
        enemy2.move(angle + Math.PI, (distance - enemy.hitbox - enemy2.hitbox) / 2);
      }
    });

    if (enemy.collideWith(player)) {
      player.takeDamage();
      enemy.takeDamage();
    }
  });

  gameState.enemies = enemies.filter((enemy) => !enemy.toDestroy);
}
