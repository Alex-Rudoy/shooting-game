export default function move(entities, f) {
  let { player, playerShots } = entities;
  player.move(player.moveAngle, player.speed * f);

  playerShots.forEach((shot) => shot.move(shot.turnAngle, shot.speed * f));
  entities.playerShots = playerShots.filter((shot) => shot.x > -50 && shot.x < 1650 && shot.y > -50 && shot.y < 950);
}
