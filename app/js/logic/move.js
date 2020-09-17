export default function move(entities, f) {
  let { player, playerShots, enemies } = entities;
  player.move(player.moveAngle, player.speed * f);

  playerShots.forEach((shot) => {
    shot.move(shot.turnAngle, shot.speed * f);
    enemies.forEach((enemy) => {
      if (shot.collisionDetection(enemy)) {
        shot.toDestroy = true;
        enemy.toDestroy = true;
      }
    });
  });
  entities.playerShots = playerShots.filter(
    (shot) => shot.x > -50 && shot.x < 1650 && shot.y > -50 && shot.y < 950 && !shot.toDestroy
  );

  enemies.forEach((enemy) => {
    enemy.decision(player);
    enemy.move(enemy.turnAngle, enemy.speed * f);
  });

  entities.enemies = enemies.filter((enemy) => !enemy.toDestroy);
}
