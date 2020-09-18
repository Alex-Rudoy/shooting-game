export default function move(entities, f) {
  let { player, playerShots, enemies } = entities;
  player.move(player.moveAngle, player.speed * f);

  playerShots.forEach((shot) => {
    shot.move(shot.turnAngle, shot.speed * f);

    // collision of shots with enemies
    enemies.forEach((enemy) => {
      if (shot.collideWith(enemy)) {
        shot.toDestroy = true;
        enemy.takeDamage();
      }
    });
  });

  // remove destroyed player shots
  entities.playerShots = playerShots.filter(
    (shot) => shot.x > -50 && shot.x < 1650 && shot.y > -50 && shot.y < 950 && !shot.toDestroy
  );

  enemies.forEach((enemy) => {
    enemy.decision(player);
    enemy.move(enemy.turnAngle, enemy.speed * f);

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

  entities.enemies = enemies.filter((enemy) => !enemy.toDestroy);
}
