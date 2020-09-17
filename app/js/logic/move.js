export default function move({ player, playerShots }, f) {
  player.move(player.moveAngle, player.speed * f);
  playerShots.forEach((shot) => shot.move(shot.turnAngle, shot.speed * f));
}
