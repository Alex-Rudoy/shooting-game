export default function move({ player }, f) {
  player.move(player.moveAngle, player.speed * f);
}
